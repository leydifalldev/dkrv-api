import { LocationInput } from './location.input';
export declare class PlaceInput {
    name: string;
    logo?: string;
    phone: string;
    email?: string;
    description?: string;
    gastronomie?: string[];
    location?: LocationInput;
    address: string;
    cpc: string;
    zone: string;
    likes?: number;
    notation?: number;
    travelTime?: number;
    oceanNear?: boolean;
    temporalyPlace?: boolean;
}
