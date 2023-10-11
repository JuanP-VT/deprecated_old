export interface ErrorResponse {
  code: number;
  message: string;
}

export interface SuccessfulResponse<T> {
  data: T;
}
