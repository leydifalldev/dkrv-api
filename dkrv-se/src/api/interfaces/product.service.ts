import { Observable } from 'rxjs';

import { ProductListResponse, ProductDetailResponse, ProductCreateResponse, ProductUpdateResponse, ProductDeleteResponse } from '../objects';

export interface IProductService {
  search({}): Observable<ProductListResponse>;
  get(id): Observable<ProductDetailResponse>;
  getByQuery(filter: any): Observable<ProductListResponse>;
  add(ProductInput): Observable<ProductCreateResponse>;
  update(ProductInput): Observable<ProductUpdateResponse>;
  delete(IdInput): Observable<ProductDeleteResponse>;
}
