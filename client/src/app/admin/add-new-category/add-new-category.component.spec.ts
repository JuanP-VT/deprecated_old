/**
 *
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewCategoryComponent } from './add-new-category.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';
import { fakeAsync, tick } from '@angular/core/testing';
import { ProductCategoryAPIResponse } from 'src/app/shared/types/api-response';
import { ProductCategory } from 'src/app/shared/types/product-category';

describe('AddNewCategoryComponent', () => {
  let mockProductCategoryService: jasmine.SpyObj<ProductCategoryService>;
  let component: AddNewCategoryComponent;
  let fixture: ComponentFixture<AddNewCategoryComponent>;

  beforeEach(async () => {
    mockProductCategoryService = jasmine.createSpyObj(
      'ProductCategoryService',
      ['createCategory']
    );
    TestBed.configureTestingModule({
      declarations: [AddNewCategoryComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
      ],
      providers: [
        {
          provide: ProductCategoryService,
          useValue: mockProductCategoryService,
        },
      ],
    });
    fixture = TestBed.createComponent(AddNewCategoryComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls', () => {
    expect(component.name instanceof FormControl).toBeTruthy();
    expect(component.imageUrl instanceof FormControl).toBeTruthy();
  });

  it('should call createCategory on handleSubmit', () => {
    component.name.setValue('Electronics');
    component.imageUrl.setValue('some_url');

    mockProductCategoryService.createCategory.and.returnValue(of({}));

    component.handleSubmit();

    expect(mockProductCategoryService.createCategory).toHaveBeenCalled();
  });

  it('should reset form controls on successful submit', fakeAsync(() => {
    mockProductCategoryService.createCategory.and.returnValue(of({}));

    component.name.setValue('Fruits');
    component.imageUrl.setValue('https://www.icon.com');

    component.handleSubmit();

    tick(2100);

    expect(component.name.value).toEqual('');
    expect(component.imageUrl.value).toEqual('');
  }));

  it('should handle errors from createCategory', fakeAsync(() => {
    mockProductCategoryService.createCategory.and.returnValue(
      throwError({ error: { message: 'Error occurred' } })
    );

    component.handleSubmit();

    tick();

    expect(component.feedback).toBe('Error occurred');
  }));

  it('should show feedback on successful request', fakeAsync(() => {
    const mockResponse: ProductCategoryAPIResponse<ProductCategory> = {
      data: { name: 'Woman clothing', imageUrl: 'https://www.icon.com' },
    };
    mockProductCategoryService.createCategory.and.returnValue(of(mockResponse));

    component.handleSubmit();

    tick(); // resolve the microtask queue
    expect(component.feedback).toBe('Category Added!');
    tick(2100);
    expect(component.feedback).toBe('');
  }));

  it('should show feedback on invalid request', fakeAsync(() => {
    const mockResponse: ProductCategoryAPIResponse<ProductCategory> = {
      error: { message: 'Error Message', code: 403 },
    };
    mockProductCategoryService.createCategory.and.returnValue(of(mockResponse));

    component.handleSubmit();

    tick(); // resolve the microtask queue
    expect(component.feedback).toBe('Error Message');
  }));
});
