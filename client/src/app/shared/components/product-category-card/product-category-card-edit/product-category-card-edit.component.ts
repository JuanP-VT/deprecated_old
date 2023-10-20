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
  @Output() changeEvent = new EventEmitter<boolean>();
  constructor(public ProductCategoryService: ProductCategoryService) {}
  feedback = '';
  name = new FormControl('');
  imageUrl = new FormControl('');
  _id = '';
  ngOnChanges(changes: SimpleChanges) {
    if (changes['productCategory'] && changes['productCategory'].currentValue) {
      this.name.setValue(changes['productCategory'].currentValue.name);
      this.imageUrl.setValue(changes['productCategory'].currentValue.imageUrl);
      this._id = this.productCategory._id ?? '';
    }
  }
  //emit event to change to view mode
  handleClick() {
    this.changeEvent.emit(false);
  }
  handleSubmit() {
    const newName = this.name.value;
    const newImageUrl = this.imageUrl.value;
    const _id = this._id;
    if (newName && newImageUrl) {
      const newCategory = productCategory(newName, newImageUrl);
      const newCategoryWithId = { ...newCategory, _id };
      this.ProductCategoryService.updateCategory(newCategoryWithId).subscribe(
        () => {
          this.feedback = 'edit was successful';
          setTimeout(() => (this.feedback = ''), 2000);
        }
      );
    }
  }
}
