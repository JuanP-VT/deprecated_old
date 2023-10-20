import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryCardEditComponent } from './product-category-card-edit.component';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

describe('ProductCategoryCardEditComponent', () => {
  let component: ProductCategoryCardEditComponent;
  let fixture: ComponentFixture<ProductCategoryCardEditComponent>;
  let mockProductCategoryService: jasmine.SpyObj<ProductCategoryService>;

  beforeEach(() => {
    mockProductCategoryService = jasmine.createSpyObj(
      'ProductCategoryService',
      ['updateCategory']
    );
    TestBed.configureTestingModule({
      declarations: [ProductCategoryCardEditComponent],
      imports: [
        BrowserAnimationsModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        MatFormFieldModule,
      ],
      providers: [
        {
          provide: ProductCategoryService,
          useValue: mockProductCategoryService,
        },
      ],
    });
    fixture = TestBed.createComponent(ProductCategoryCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
