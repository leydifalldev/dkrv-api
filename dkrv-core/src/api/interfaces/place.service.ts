import { Observable } from 'rxjs';
import { PlaceListResponse, PlaceDetailResponse, PlaceCreateResponse, PlaceUpdateResponse, PlaceDeleteResponse } from "../objects";

export interface IPlaceService {
  search({}): Observable<PlaceListResponse>;
  get(id): Observable<PlaceDetailResponse>;
  add(PlaceInput): Observable<PlaceCreateResponse>;
  update(PlaceInput): Observable<PlaceUpdateResponse>;
  delete(IdInput): Observable<PlaceDeleteResponse>;
}
