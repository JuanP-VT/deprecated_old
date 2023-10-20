import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryCardViewComponent } from './product-category-card-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductCategoryCardViewComponent', () => {
  let component: ProductCategoryCardViewComponent;
  let fixture: ComponentFixture<ProductCategoryCardViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryCardViewComponent],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatCardModule,
      ],
    });
    fixture = TestBed.createComponent(ProductCategoryCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
