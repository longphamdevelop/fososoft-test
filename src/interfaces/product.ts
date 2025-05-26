export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  manufactureYear: number;
  origin: string;
  brand: string;
  price: number;
  thumbnail: string;
  categories: string[];
  createdAt: number;
  discount?: number;
}
