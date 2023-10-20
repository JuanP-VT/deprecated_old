import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryCardEditComponent } from './product-category-card-edit.component';

describe('ProductCategoryCardEditComponent', () => {
  let component: ProductCategoryCardEditComponent;
  let fixture: ComponentFixture<ProductCategoryCardEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryCardEditComponent]
    });
    fixture = TestBed.createComponent(ProductCategoryCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
