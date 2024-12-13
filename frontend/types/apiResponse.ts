export interface Photo {
  id: number;
  original_photo: string;
  thumbnail: string;
  photo_date: string;
  vehicle: number;
}

export interface Options {
  [key: string]: string | number | boolean;
}

export interface Category {
    id: number;
    title: string;
    description: string;
}

export interface VehicleAdd {
  category: number;
  brand: string;
  model: string;
  body_type: string;
  options?: Options;
  price: number;
}

export interface Vehicle extends VehicleAdd {
  id: number;
  photos?: Photo[];
}

export interface ApiResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}