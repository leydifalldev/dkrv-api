import { ICoordinate } from './coordinate.interface';
export interface ILocation {
    address: string;
    cpc: string;
    zone: string;
    Coordinate: ICoordinate;
}
