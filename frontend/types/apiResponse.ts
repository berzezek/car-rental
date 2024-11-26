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

export interface Vehicle {
  id: number;
  category_data: Category;
  brand: string;
  model: string;
  photos?: Photo[];
  options: Options;
  price: number;
  status: string;
}
