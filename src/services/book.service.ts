import { UserModel } from '../models/user';
import { v4 as uuidv4 } from 'uuid';

export const listAll = async () => {
  return UserModel.scan().limit(50).exec();
};

export const getById = async (id: string) => {
  return UserModel.get(id);
};

export const create = async (body: any) => {
  const user = new UserModel({
    id: uuidv4(),
    ...body,
  });
  return user.save();
};

export const update = async (id: string, name: string, email: string) => {
  return UserModel.update({
    id,
    ...(name && { name }),
    ...(email && { email }),
  });
};

export const deleteById = async (id: string) => {
  return UserModel.update({ id }, { isDeleted: true });
};
