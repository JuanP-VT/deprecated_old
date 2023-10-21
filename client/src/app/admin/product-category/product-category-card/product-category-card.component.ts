import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { ProductCategory } from '../../../shared/types/product-category';
@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.css'],
})
export class ProductCategoryCardComponent {
  @Input({ required: true }) productCategory!: ProductCategory;
  @Output() requestCategoryListEvent = new EventEmitter();
  feedback = '';
  isOnEditMode = false;

  setIsOnEditMode(event: boolean) {
    this.isOnEditMode = event;
  }

  handleCategoryListEvent() {
    this.requestCategoryListEvent.emit();
  }
}
