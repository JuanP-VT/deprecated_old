import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ProductCategoryCardEditComponent } from './product-category-card-edit.component';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';
import { of, throwError } from 'rxjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

describe('ProductCategoryCardEditComponent', () => {
  let component: ProductCategoryCardEditComponent;
  let fixture: ComponentFixture<ProductCategoryCardEditComponent>;
  let mockProductCategoryService: any;

  beforeEach(async () => {
    mockProductCategoryService = {
      updateCategory: jasmine
        .createSpy('updateCategory')
        .and.returnValue(of({})),
    };

    await TestBed.configureTestingModule({
      declarations: [ProductCategoryCardEditComponent],
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: ProductCategoryService,
          useValue: mockProductCategoryService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryCardEditComponent);
    component = fixture.componentInstance;
  });
  it('should initialize form controls with input values', () => {
    component.productCategory = {
      _id: '1',
      name: 'Test',
      imageUrl: 'test.png',
    };

    // Manually trigger the ngOnChanges method
    component.ngOnChanges({
      productCategory: {
        previousValue: undefined,
        currentValue: component.productCategory,
        firstChange: true,
        isFirstChange: () => true,
      },
    });

    fixture.detectChanges();

    expect(component.name.value).toEqual('Test');
    expect(component.imageUrl.value).toEqual('test.png');
  });

  it('should call updateCategory service method on valid form submission', () => {
    component.name.setValue('Test');
    component.imageUrl.setValue('test.png');
    component._id = '1';

    component.handleSubmit();

    expect(mockProductCategoryService.updateCategory).toHaveBeenCalledWith({
      name: 'Test',
      imageUrl: 'test.png',
      _id: '1',
    });
  });
  it('should set feedback on successful update', () => {
    component.name.setValue('Test');
    component.imageUrl.setValue('test.png');
    component._id = '1';

    component.handleSubmit();

    expect(component.feedback).toEqual('edit was successful');
  });
});
