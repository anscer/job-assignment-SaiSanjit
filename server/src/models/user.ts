import mongoose, { Schema, Document } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

export interface IUser extends Document {
  username: string;
  roles : string[];
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  roles: { type: [String], default: ['user'] }
});

userSchema.plugin(passportLocalMongoose);

export default mongoose.model<IUser>('User', userSchema);
