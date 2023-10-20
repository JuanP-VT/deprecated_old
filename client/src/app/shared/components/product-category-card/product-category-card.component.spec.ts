import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryCardComponent } from './product-category-card.component';
import { ProductCategoryCardEditComponent } from './product-category-card-edit/product-category-card-edit.component';
import { ProductCategoryCardViewComponent } from './product-category-card-view/product-category-card-view.component';
import { ProductCategorySearchComponent } from 'src/app/admin/product-category-search/product-category-search.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

describe('ProductCategoryCardComponent', () => {
  let component: ProductCategoryCardComponent;
  let fixture: ComponentFixture<ProductCategoryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductCategoryCardComponent,
        ProductCategoryCardEditComponent,
        ProductCategoryCardViewComponent,
        ProductCategorySearchComponent,
      ],
      imports: [MatCardModule, BrowserAnimationsModule, MatIconModule],
    });
    fixture = TestBed.createComponent(ProductCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
