export interface ProductCategoryAPIResponse<T> {
  error?: {
    message: string;
    code: number;
  };
  data?: T;
}
