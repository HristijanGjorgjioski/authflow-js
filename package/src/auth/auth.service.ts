import { ForbiddenException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "mongodb/user.schema";
import { Model } from "mongoose";

@Injectable()
export class AuthService {
  constructor(@InjectModel('user') private readonly userModel: Model<User>, private jwt: JwtService) {}

  // Sign JWT Token
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const access_token = await this.jwt.signAsync(payload, {
      expiresIn: "1h",
      secret: process.env.JWT_SECRET,
    });

    return {
      access_token,
    };
  }

  // Login
  async login({ email, password }: AuthDto): Promise<{ access_token: string }> {
    const user = await this.userModel.find({ email })

    if (!user) throw new ForbiddenException("Credentials incorrect");

    const pwMatches = await argon.verify(user.password, password);
    if (!pwMatches) throw new ForbiddenException("Credentials incorrect");

    return this.signToken(user.id, email);
  }

  // Signup/Register
  async signup({
    email,
    password,
  }: AuthDto): Promise<{ access_token: string }> {
    const hash = await argon.hash(password);
    try {
      const user = await this.userModel.create({
        data: {
          email,
          password: hash,
        },
      });
      return this.signToken(user.id, email);
    } catch (error) {
      return error;
    }
  }
}
