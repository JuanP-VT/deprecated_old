import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import type { ProductCategory } from '../../types/product-category';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.css'],
})
export class ProductCategoryCardComponent implements OnChanges {
  @Input({ required: true }) category!: ProductCategory;

  name = new FormControl('');
  imageUrl = new FormControl('');
  _id = '';
  isOnEditMode = false;
  feedback = '';
  handleClick() {
    this.isOnEditMode = !this.isOnEditMode;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['category'] && changes['category'].currentValue) {
      this.name.setValue(changes['category'].currentValue.name);
      this.imageUrl.setValue(changes['category'].currentValue.imageUrl);
      this._id = this.category._id ?? '';
    }
  }

  handleSubmit() {
    console.log('No service injected');
  }
}
