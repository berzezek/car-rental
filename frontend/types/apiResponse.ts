export interface Photo {
  id: number;
  original_photo: string;
  thumbnail: string;
  photo_date: string;
  vehicle: number;
}

export interface Options {
  brand: string;
  model: string;
  year: number;
  number_seats: number;
  engine: string;
  lager_bags: number;
}

export interface Category {
    id: number;
    title: string;
    description: string;
}

export interface Vehicle {
  id: number;
  photos?: Photo[];
  options: Options;
  price: number;
  status: string;
  category_data: Category;
}
