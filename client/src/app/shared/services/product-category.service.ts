/**
 * Service for managing product categories via HTTP requests.
 *
 * This service provides methods for fetching and creating product categories
 * through HTTP requests. It handles error responses and retries HTTP requests
 * for improved reliability.
 *
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductCategory } from '../types/product-category';
import { ProductCategoryAPIResponse } from '../types/api-response';
import { catchError, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  apiUrl = environment.productCategoryUrl;
  constructor(private http: HttpClient) {}

  //Error handling on http request
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  // Request all product categories
  getCategories = () => {
    return this.http
      .get<ProductCategoryAPIResponse<ProductCategory[]>>(this.apiUrl)
      .pipe(retry(3), catchError(this.handleError));
  };

  //Create new category
  createCategory = (category: ProductCategory) => {
    return this.http
      .post<ProductCategoryAPIResponse<ProductCategory>>(this.apiUrl, category)
      .pipe(retry(3), catchError(this.handleError));
  };
}
