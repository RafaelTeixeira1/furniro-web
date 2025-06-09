export interface Description {
  text: string;
  images: string[];
}

export interface AdditionalInfo {
  text: string;
}

export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  stars: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  images: string[];
  sku: string;
  category: string;
  tags: string[];
  description: Description;
  additionalInfo: AdditionalInfo;
  discount: number;
  releaseDate: string; // ISO Date: "YYYY-MM-DD"
}

export interface ProductSummary {
  id: number;
  name: string;
  shortDescription: string;
  price: number;
  image: string;
  discount: number;
  releaseDate: string;
}

export interface ProductFilter {
  category?: string[];
  tags?: string[];
  sort?: 'default' | 'price-asc' | 'price-desc' | 'newest';
}
