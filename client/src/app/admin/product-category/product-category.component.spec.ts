import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';
import { ProductCategoryComponent } from './product-category.component';
import { ProductCategorySearchComponent } from '../product-category-search/product-category-search.component';
import { ProductCategoryCardComponent } from './product-category-card/product-category-card.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ProductCategoryCardViewComponent } from './product-category-card/product-category-card-view/product-category-card-view.component';
import { ProductCategoryCardEditComponent } from './product-category-card/product-category-card-edit/product-category-card-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('ProductCategoryComponent', () => {
  let component: ProductCategoryComponent;
  let fixture: ComponentFixture<ProductCategoryComponent>;
  let mockProductCategoryService: jasmine.SpyObj<ProductCategoryService>;

  const mockData = {
    data: [
      { name: 'Electronics', imageUrl: 'https://www.g.com' },
      { name: 'Clothing', imageUrl: 'https://www.g.com' },
      { name: 'Toys', imageUrl: 'https://www.g.com' },
    ],
  };

  beforeEach(async () => {
    mockProductCategoryService = jasmine.createSpyObj(
      'ProductCategoryService',
      ['getCategories']
    );
    mockProductCategoryService.getCategories.and.returnValue(of(mockData));

    await TestBed.configureTestingModule({
      declarations: [
        ProductCategoryComponent,
        ProductCategorySearchComponent,
        ProductCategoryCardComponent,
        ProductCategoryCardViewComponent,
      ],
      imports: [
        ReactiveFormsModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
      ],
      providers: [
        {
          provide: ProductCategoryService,
          useValue: mockProductCategoryService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCategoryComponent);
    component = fixture.componentInstance;
  });

  it('should fetch category list on initialization', () => {
    fixture.detectChanges(); // This will trigger ngOnInit

    expect(component.categoryList).toEqual(mockData.data);
    expect(component.filteredCategoryList).toEqual(mockData.data);
    expect(mockProductCategoryService.getCategories).toHaveBeenCalled();
  });

  it('should fetch category list when fetchProductCategoryList is called', () => {
    component.fetchProductCategoryList();

    expect(component.categoryList).toEqual(mockData.data);
    expect(component.filteredCategoryList).toEqual(mockData.data);
    expect(mockProductCategoryService.getCategories).toHaveBeenCalled();
  });

  it('should update filteredCategoryList when handleSearch is called', () => {
    const mockEvent = [{ name: 'Clothing', imageUrl: 'https://www.g.com' }];

    component.handleSearch(mockEvent);

    expect(component.filteredCategoryList).toEqual(mockEvent);
  });
});
