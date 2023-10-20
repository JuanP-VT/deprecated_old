import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryCardViewComponent } from './product-category-card-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

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
    }).compileComponents();
    fixture = TestBed.createComponent(ProductCategoryCardViewComponent);
    component = fixture.componentInstance;
    component.productCategory = {
      name: 'Clothing',
      imageUrl: 'https://www.g.com',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit isOnEditModeEvent when handleClick is called', () => {
    spyOn(component.isOnEditModeEvent, 'emit');
    component.handleClick();
    expect(component.isOnEditModeEvent.emit).toHaveBeenCalledWith(true);
  });
});
