import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCategory } from 'src/app/shared/types/product-category';
import { ProductCategorySearchComponent } from './product-category-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('ProductCategorySearchComponent', () => {
  let component: ProductCategorySearchComponent;
  let fixture: ComponentFixture<ProductCategorySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCategorySearchComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCategorySearchComponent);
    component = fixture.componentInstance;
    component.categoryList = [
      { name: 'Electronics', imageUrl: 'https://www.g.com' },
      { name: 'Clothing', imageUrl: 'https://www.g.com' },
      { name: 'Toys', imageUrl: 'https://www.g.com' },
    ] as ProductCategory[];
    fixture.detectChanges();
  });

  it('should emit filtered categories when input is provided', () => {
    spyOn(component.onSearchEvent, 'emit');

    component.name.setValue('cl');
    component.onChange();

    expect(component.onSearchEvent.emit).toHaveBeenCalledWith([
      { name: 'Clothing', imageUrl: 'https://www.g.com' },
    ]);
  });

  it('should emit original array when input is empty', () => {
    spyOn(component.onSearchEvent, 'emit');

    component.name.setValue('');
    component.onChange();

    expect(component.onSearchEvent.emit).toHaveBeenCalledWith([
      { name: 'Electronics', imageUrl: 'https://www.g.com' },
      { name: 'Clothing', imageUrl: 'https://www.g.com' },
      { name: 'Toys', imageUrl: 'https://www.g.com' },
    ]);
  });

  it('should toggle opened property', () => {
    component.opened = false;
    component.handleToggle();
    expect(component.opened).toBeTrue();

    component.handleToggle();
    expect(component.opened).toBeFalse();
  });
});
