export interface ICard {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercantage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface FilterSettings {
  category: string[];
  brand: string[];
  minPrice: number;
  maxPrice: number;
  search: string;
}
