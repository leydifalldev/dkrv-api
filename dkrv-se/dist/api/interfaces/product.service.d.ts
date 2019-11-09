import { Observable } from 'rxjs';
import { ProductListResponse, ProductDetailResponse, ProductCreateResponse, ProductUpdateResponse, ProductDeleteResponse } from '../objects';
export interface IProductService {
    search({}: {}): Observable<ProductListResponse>;
    get(id: any): Observable<ProductDetailResponse>;
    getByQuery(filter: any): Observable<ProductListResponse>;
    add(ProductInput: any): Observable<ProductCreateResponse>;
    update(ProductInput: any): Observable<ProductUpdateResponse>;
    delete(IdInput: any): Observable<ProductDeleteResponse>;
}
