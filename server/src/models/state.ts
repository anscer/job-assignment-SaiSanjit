import moment from 'moment';
import mongoose, { Document, Schema } from 'mongoose';

export interface IState extends Document {
  name: string;
  id: String;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

const stateSchema: Schema = new Schema({
  name: { type: String, required: true },
  id :{type: String, default: moment().valueOf()},
  description: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true }
});

export default mongoose.model<IState>('State', stateSchema);
