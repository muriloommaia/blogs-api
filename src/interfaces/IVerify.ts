export interface IRegister {
  id?: number,
  userName: string,
  email: string,
  password: string
}

export interface ILogin {
  id?: number,
  email: string,
  password?: string
}

export interface IPostCreate {
  id?: number,
  title: string,
  versicle: string,
  content: string,
  categories: string[]
}

export interface ICategoryCreate {
  categories: string[]
}