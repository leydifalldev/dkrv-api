export interface Place {
  id: string;
  name: string;
  place_logo: string;
  phone: string;
  email: string;
  description: string;
  gastronomie: Gastronomie[];
  location: Coordinate;
  address: string;
  cpc: string;
  likes: number;
  notation: number;
  primary_category: any;
  pictures: Picture[];
  main_picture: number;
  schedule: Schedule[];
  zone: string;
  travel_time: number;
  ocean_near: boolean;
  services: any[];
  temporaly_place: boolean;
}

export interface Gastronomie {
    name: string;
}

export interface Coordinate {
    lon: number;
    lat: number;
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
