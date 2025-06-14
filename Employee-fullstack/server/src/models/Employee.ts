import mongoose, { Document, Schema } from "mongoose";

export interface IEmployee extends Document {
  name: string;
  age: number;
  email: string;
  role: string;
}

const EmployeeSchema: Schema = new Schema<IEmployee>({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  email: {type: String, required: true, unique: true},
  role: {type: String, required: true},
}, {
  timestamps: true
});

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);