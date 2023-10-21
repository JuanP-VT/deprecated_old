import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryComponent } from './product-category.component';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';
import { ProductCategorySearchComponent } from '../product-category-search/product-category-search.component';
import { ProductCategoryCardComponent } from 'src/app/admin/product-category/product-category-card/product-category-card.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

describe('ProductCategoryComponent', () => {
  let mockProductCategoryService: jasmine.SpyObj<ProductCategoryService>;
  let component: ProductCategoryComponent;
  let fixture: ComponentFixture<ProductCategoryComponent>;

  beforeEach(() => {
    mockProductCategoryService = jasmine.createSpyObj(
      'ProductCategoryService',
      ['getCategory', 'updateCategory']
    );

    TestBed.configureTestingModule({
      declarations: [
        ProductCategoryComponent,
        ProductCategorySearchComponent,
        ProductCategoryCardComponent,
      ],
      imports: [
        MatSidenavModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatCardModule,
      ],
      providers: [
        {
          provide: ProductCategoryService,
          useValue: mockProductCategoryService,
        },
      ],
    });
    fixture = TestBed.createComponent(ProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
