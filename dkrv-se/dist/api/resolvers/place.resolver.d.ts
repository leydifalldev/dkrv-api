import { Place } from '../objects';
import { PlaceInput } from '../inputs';
import { PlaceStore } from 'src/search-engine/place/place.service';
export declare class PlaceResolver {
    private placeStore;
    constructor(placeStore: PlaceStore);
    places(): Promise<Place[]>;
    getPlace(id: string): Promise<any>;
    createPlace(place: PlaceInput): Promise<any>;
}
