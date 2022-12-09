import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsOptional()
    @IsString()
    firstName?: string;

    @IsOptional()
    @IsString()
    lastName?: string;
    
    @IsOptional()
    @IsString()
    age?: string;
    
    @IsOptional()
    @IsString()
    birthDate?: string;
    
    @IsOptional()
    @IsString()
    name?: string;
    
    @IsOptional()
    @IsString()
    phoneNumber?: string;

    @IsOptional()
    @IsString()
    picture?: string;
}
