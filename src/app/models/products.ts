export interface Product {
  category?: string,
  description?: string,
  id?: number,
  images:string,
  price?: number,
  rating?: { rate?: any, count?: number }
  title: string,
}
