import { Location } from './location.object';
import { Product } from './product.object';
export declare class Place {
    id: string;
    name: string;
    logo?: string;
    phone: string;
    email?: string;
    description?: string;
    gastronomies?: string[];
    location?: Location;
    address: string;
    cpc: string;
    zone: string;
    likes?: number;
    notation?: number;
    travelTime?: number;
    oceanNear?: boolean;
    temporalyPlace?: boolean;
    products?: Product[];
}
