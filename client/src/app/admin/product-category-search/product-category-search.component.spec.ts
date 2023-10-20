import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCategorySearchComponent } from './product-category-search.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('ProductCategorySearchComponent', () => {
  let component: ProductCategorySearchComponent;
  let fixture: ComponentFixture<ProductCategorySearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategorySearchComponent],
      imports: [
        MatSidenavModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule,
        MatFormFieldModule,
      ],
      providers: [],
    });
    fixture = TestBed.createComponent(ProductCategorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
