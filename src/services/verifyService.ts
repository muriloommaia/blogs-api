import {
  ICategoryCreate,
  ILogin,
  IPostCreate,
  IRegister
} from '../interfaces/'
import {
  schemaToCreateCategory,
  schemaToLogin,
  schemaToPostDevo,
  schemaToRegister
} from './schemas/JoiVerify'



export const verifyToRegister = async (body: IRegister): Promise<IRegister> => {
  const response = schemaToRegister.validateAsync(body);
  return response;
}

export const verifyToLogin = async (body: ILogin): Promise<ILogin> => {
  const response = schemaToLogin.validateAsync(body);
  return response;
}

export const verifyToPostDevo = (body: IPostCreate): Promise<IPostCreate> => {
  const response = schemaToPostDevo.validateAsync(body);
  return response;
}

export const verifyToCreateCategory = (body: ICategoryCreate): Promise<ICategoryCreate> => {
  const response = schemaToCreateCategory.validateAsync(body);
  return response;
}