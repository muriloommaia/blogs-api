export type UserAttributes = {
  id: number,
  userName: string,
  email:string
};

export type PostAttributes = {
  id: number,
  title: string,
  versicle: string,
  content: string,
  book: string,
  userId: number
};

export type CategoryAttributes = {
  id: number,
  name: string
}

export type PasswordAttributes = {
  userId: number,
  password: string,
}