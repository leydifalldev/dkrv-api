export interface Product {
  id: string;
  name: string;
  place_logo: string;
  price: number;
  phone: string;
  description: string;
  gastronomie: Gastronomie[];
  cooking_time: number;
  location: Coordinate;
  address: string;
  cpc: string;
  like: number;
  recipes: string[];
  accompaniment: Accompaniment[];
  place_name: string;
  place_ref: string;
  menus_link: MenuLink;
  notation: number;
  discount: number;
  size: string;
  quantity: number;
  spicy_level: number;
  category: string;
  picture: Picture[];
  main_picture: number;
  schedule: Schedule[];
}

export interface Gastronomie {
  name: string;
}

export interface Coordinate {
  lon: number;
  lat: number;
}

export interface Accompaniment {
  name: string;
}

export interface MenuLink {
  id: string;
}

export interface Picture {
  src: string;
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
