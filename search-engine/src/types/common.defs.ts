export interface ListResponse {
  status: number;
  error: string;
  total: number;
  products?: any[];
  places?: any[];
  events?: any[];
}

export interface CreateRequest<T> {
  payload: T;
}

export interface CreateResponse {
  id: string;
  status: number;
  error: string;
  payload: boolean;
}

export interface DetailRequest {
  id: string;
}

export interface DeleteRequest {
  id: string;
}

export interface DeleteResponse {
  status: number;
  payload: boolean;
  error: string;
}

export interface UpdateRequest<T> {
  id: string;
  payload: T;
}

export interface UpdateResponse {
  status: number;
  error: string;
  payload: boolean;
}

export interface ID {
  id: string;
}

export interface DetailRequest {
  id: string;
}

export interface DetailResponse {
  status: number;
  error: string;
  payload: any;
}

export interface SearchParams {
  index: string;
  type: string;
  q: string;
  from: number;
  to: number;
}
