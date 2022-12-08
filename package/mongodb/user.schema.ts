import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import mongoose, { HydratedDocument } from 'mongoose';

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    email: string;
    
    @Prop({ required: true })
    password: string;
    
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
    phoneNumber?: string;
    
    @Prop()
    gender?: string;


    @Prop()
    birthDate?: string;

    @Prop()
    picture?: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

export interface User extends mongoose.Document {
    _id: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    age?: string;
    birthDate?: string;
    name?: string;
    phoneNumber?: string;
    picture?: string;
  }
