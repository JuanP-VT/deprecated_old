import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ProductCategoryService } from './product-category.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductCategory } from '../types/product-category';

describe('ProductCategoryService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductCategoryService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductCategoryService],
    });
    service = TestBed.inject(ProductCategoryService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test get categories
  it('should return all categories', () => {
    const categories: ProductCategory[] = [
      { imageUrl: 'https://www.image.com', name: 'Fruit' },
    ];

    service.getCategories().subscribe((res) => {
      expect(res.data).toEqual(categories);
    });

    const req = httpTestingController.expectOne(service.apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush({ data: categories });
  });

  it('should create a product category', () => {
    const category: ProductCategory = {
      imageUrl: 'https://www.icon.com',
      name: 'New Category',
    };
    service.createCategory(category).subscribe((res) => {
      // Expect response
      expect(res.data).toEqual(category);
    });

    const req = httpTestingController.expectOne(service.apiUrl);
    expect(req.request.method).toEqual('POST');
    req.flush({ data: category });
  });
});
