import mongoose, { Schema, Document } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

userSchema.plugin(passportLocalMongoose);

export default mongoose.model<IUser>('User', userSchema);
