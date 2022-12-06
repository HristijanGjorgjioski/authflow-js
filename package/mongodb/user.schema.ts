import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop()
    email: string;

    @Prop()
    name?: string;

    @Prop()
    firstName?: string;

    @Prop()
    lastName?: string;

    @Prop()
    age?: string;

    @Prop()
    city?: string;

    @Prop()
    phoneNumber?: number;
    
    @Prop()
    gender?: string;

    @Prop()
    password: string;

    @Prop()
    birthDate?: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
