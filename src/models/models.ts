export type Categories = Category[]
export type ProductsByCategory = ProductByCategory[]
export interface loginUser{
    email: string;
    password: string;
}
export interface loginUserResp {
  access_token: string
  refresh_token: string
}

export interface SignFormUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
}
export interface User {
  id: number
  email: string
  password: string
  name: string
  role: string
  avatar: string
}
export interface Category {
  id: number
  name: string
  image: string
  creationAt: string
  updatedAt: string
}
export interface ProductByCategory extends quantityProd  {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: Category
}
export interface quantityProd {
  quantity: number
}

