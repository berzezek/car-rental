export interface Photo {
  id: number;
  original_photo: string;
  thumbnail: string;
  photo_date: string;
  product: number;
}

export interface Options {
  [key: string]: string | number | boolean;
}

export interface Category {
    id: number;
    title: string;
    description: string;
}

export interface ProductAdd {
  category: number;
  title: string;
  price: number;
  options?: Options;
  is_active?: boolean;
}

export interface Product extends ProductAdd {
  id: number;
  photos?: Photo[];
  category_data: Category;
}

export interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}