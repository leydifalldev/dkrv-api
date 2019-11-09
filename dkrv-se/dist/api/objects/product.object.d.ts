import { Recipe } from './recipe.type';
import { Coordinate } from './coordinate.type';
import { Picture } from './picture';
export declare class Product {
    id: string;
    name: string;
    category?: string;
    gastronomies: string[];
    description?: string;
    recipes?: Recipe[];
    spicy?: number;
    price?: number;
    discount?: number;
    quantity?: number;
    size?: number;
    notation?: number;
    likes?: number;
    placeid?: string;
    placename?: string;
    placelogo?: string;
    placezone?: string;
    location?: Coordinate;
    picture?: Picture;
    menuAvailable?: boolean;
}
