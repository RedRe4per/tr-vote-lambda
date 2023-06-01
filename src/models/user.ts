import { model, Schema } from 'dynamoose';

const UserSchema = new Schema({
  id: String,
  name: String,
  email: String,
});

export const UserModel = model('User', UserSchema);
