import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCategory } from 'src/app/shared/types/product-category';

@Component({
  selector: 'app-product-category-card-view',
  templateUrl: './product-category-card-view.component.html',
  styleUrls: ['./product-category-card-view.component.css'],
})
export class ProductCategoryCardViewComponent {
  @Input({ required: true }) productCategory!: ProductCategory;
  @Output() changeEvent = new EventEmitter<boolean>();

  //Change into edit mode
  handleClick() {
    this.changeEvent.emit(true);
  }
}
