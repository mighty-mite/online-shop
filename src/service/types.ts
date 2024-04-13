export interface ICard {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercantage: number;
  rating: 4.69;
  stock: 94;
  brand: 'Apple';
  category: 'smartphones';
  thumbnail: '...';
  images: string[];
}

export interface FilterSettings {
  category: string[];
  brand: string[];
  minPrice: number;
  maxPrice: number;
  search: string;
}
