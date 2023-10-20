import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryCardViewComponent } from './product-category-card-view.component';

describe('ProductCategoryCardViewComponent', () => {
  let component: ProductCategoryCardViewComponent;
  let fixture: ComponentFixture<ProductCategoryCardViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryCardViewComponent]
    });
    fixture = TestBed.createComponent(ProductCategoryCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
