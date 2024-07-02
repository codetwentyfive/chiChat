import { Schema, model, Document } from 'mongoose';

interface IMessage extends Document {
  user: string;
  message: string;
  timestamp: Date;
}

const messageSchema = new Schema<IMessage>({
  user: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default model<IMessage>('Message', messageSchema);
