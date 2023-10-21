import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCategory } from 'src/app/shared/types/product-category';

@Component({
  selector: 'app-product-category-card-view',
  templateUrl: './product-category-card-view.component.html',
  styleUrls: ['./product-category-card-view.component.css'],
})
export class ProductCategoryCardViewComponent {
  @Input({ required: true }) productCategory!: ProductCategory;
  @Output() isOnEditModeEvent = new EventEmitter<boolean>();

  /**
   * Emits an event to notify parent components to switch to edit mode
   * when this method is triggered by a click event.
   */
  handleClick() {
    this.isOnEditModeEvent.emit(true);
  }
}
