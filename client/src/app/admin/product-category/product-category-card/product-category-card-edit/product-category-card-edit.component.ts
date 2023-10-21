/**
 * ProductCategoryCardEditComponent
 *
 * This component provides an interface to edit a product category.
 *
 * Features:
 * - Receives a product category as an input.
 * - Displays form controls (name and imageUrl) to edit the properties of the product category.
 * - Reflects changes in the input product category to the form controls using the ngOnChanges lifecycle hook.
 * - Allows the user to submit the edited category, calling the ProductCategoryService to update the category.
 * - Emits an event to notify the parent component to switch between edit mode and view mode.
 * - Provides feedback to the user upon successful edit or if an error occurs.
 * - After a successful edit, it emits an event to request an updated list of product categories.
 *
 * Dependencies:
 * - ProductCategoryService: Used to update the product category.
 * - productCategory factory: Used to create a new product category object.
 *
 * Note:
 * The component assumes the existence of a product category input, and this input is mandatory.
 */
import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductCategory } from 'src/app/shared/types/product-category';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';
import productCategory from 'src/app/shared/factory/product-category';
@Component({
  selector: 'app-product-category-card-edit',
  templateUrl: './product-category-card-edit.component.html',
  styleUrls: ['./product-category-card-edit.component.css'],
})
export class ProductCategoryCardEditComponent implements OnChanges {
  @Input({ required: true }) productCategory!: ProductCategory;
  @Output() isOnEditModeEvent = new EventEmitter<boolean>();
  @Output() requestCategoryListEvent = new EventEmitter();
  constructor(public ProductCategoryService: ProductCategoryService) {} //inject service
  _id = '';
  feedback = '';
  name = new FormControl('');
  imageUrl = new FormControl('');

  //update form controls when @Input props change
  ngOnChanges(changes: SimpleChanges) {
    if (changes['productCategory'] && changes['productCategory'].currentValue) {
      this.name.setValue(changes['productCategory'].currentValue.name);
      this.imageUrl.setValue(changes['productCategory'].currentValue.imageUrl);
      this._id = this.productCategory._id ?? '';
    }
  }
  //emit event to change to view mode
  setIsOnEditMode() {
    this.isOnEditModeEvent.emit(false);
  }

  //call product category service
  handleSubmit() {
    const newName = this.name.value;
    const newImageUrl = this.imageUrl.value;
    const _id = this._id;
    //check for nullish values
    if (newName && newImageUrl) {
      const newCategory = productCategory(newName, newImageUrl);
      const newCategoryWithId = { ...newCategory, _id };
      this.ProductCategoryService.updateCategory(newCategoryWithId).subscribe(
        () => {
          this.feedback = 'edit was successful';
          setTimeout(() => {
            this.feedback = '';
            this.requestCategoryListEvent.emit();
          }, 2000);
        },
        (error) => {
          this.feedback = error?.error?.message ?? 'An error occurred';
        }
      );
    }
  }
}
