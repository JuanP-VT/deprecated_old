/**
 * ProductCategoryCardViewComponent
 *
 * This component provides a view-only interface for a product category.
 *
 * Features:
 * - Displays details of a product category that it receives as an input.
 * - Offers an option to switch to edit mode for the provided category.
 *
 * User Interaction:
 * - When the view of the product category is clicked, the component triggers the switch
 *   to edit mode by emitting an event to the parent component.
 *
 * Dependencies:
 * - None, apart from Angular's core features and the `ProductCategory` type.
 *
 * Note:
 * The component expects a product category as input, and this input is mandatory.
 */
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
