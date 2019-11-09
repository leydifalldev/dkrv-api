import { RecipeInput } from './recipe.input';
import { CoordinateInput } from './coordinate.input';
import { PictureInput } from './picture.input';
export declare class ProductInput {
    id: string;
    name: string;
    category?: string;
    gastronomies: string[];
    description?: string;
    recipes?: RecipeInput[];
    spicy?: number[];
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
    location?: CoordinateInput;
    picture?: PictureInput;
    menuAvailable?: boolean;
}
