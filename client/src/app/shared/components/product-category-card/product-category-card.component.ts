import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { ProductCategory } from '../../types/product-category';
@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.css'],
})
export class ProductCategoryCardComponent {
  @Input({ required: true }) productCategory!: ProductCategory;
  feedback = '';
  isOnEditMode = false;

  handleViewChange(event: boolean) {
    this.isOnEditMode = event;
  }
}
