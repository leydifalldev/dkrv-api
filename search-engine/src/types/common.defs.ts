export interface ListResponse {
  total: number;
  data: any[];
}

export interface DeleteResponse {
  id: string;
  msg: string;
}

export interface UpdateResponse {
  status: number;
  error: string;
}

export interface ID {
  id: string;
}

export interface DetailResponse {
  status: number;
  error: string;
  data: any;
}

export interface SearchParams {
  index: string;
  type: string;
  q: string;
  from: number;
  to: number;
}
