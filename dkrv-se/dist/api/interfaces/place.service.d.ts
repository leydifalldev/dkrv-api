import { Observable } from 'rxjs';
import { PlaceListResponse, PlaceDetailResponse, PlaceCreateResponse, PlaceUpdateResponse, PlaceDeleteResponse } from "../objects";
export interface IPlaceService {
    search({}: {}): Observable<PlaceListResponse>;
    get(id: any): Observable<PlaceDetailResponse>;
    add(PlaceInput: any): Observable<PlaceCreateResponse>;
    update(PlaceInput: any): Observable<PlaceUpdateResponse>;
    delete(IdInput: any): Observable<PlaceDeleteResponse>;
}
