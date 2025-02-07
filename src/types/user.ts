export interface UserDTO {
  email: string
  username: string
  password: string
}

export interface User {
  email: string
  username: string
  bio?: string
  image?: string
  createdAt: string
  updatedAt: string
}