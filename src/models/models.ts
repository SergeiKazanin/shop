export type Categories = Category[]
export type ProductsByCategory = ProductByCategory[]

export interface Category {
  id: number
  name: string
  image: string
  creationAt: string
  updatedAt: string
}

export interface ProductByCategory {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: Category
}

