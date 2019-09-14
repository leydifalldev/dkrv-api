export interface Product {
  id: string;
  name: string;
  category: string;
  gastronomies?: Gastronomie[];
  description?: string;
  recipes?: string[];
  spicy?: number;
  price?: number;
  discount?: number;
  quantity?: number;
  size?: string;
  notation?: number;
  likes?: number;
  placeid: string;
  placename: string;
  placelogo?: string;
  placezone: string;
  location?: Coordinate;
  picture?: string;
  menu_available?: boolean;
}

export interface Gastronomie {
  name: string;
}

export interface Coordinate {
  lng: number;
  lat: number;
}

export interface Accompaniment {
  name: string;
}

export interface Schedule {
  date: string;
  start_am: string;
  end_am: string;
  start_pm: string;
  end_pm: string;
}

export interface ProductAPIResponse {
  total: number;
  products: Product[];
}
