/**
 * ProductCategorySearchComponent
 *
 * A component designed to filter and search through a list of product categories.
 *
 * Features:
 * - Receives a list of product categories as an input.
 * - Provides a form control (`name`) to input the search term.
 * - Filters the received product category list based on the search term and emits the
 *   filtered list through the `onSearchEvent` emitter.
 * - Provides a toggle functionality to show or hide the search component.
 *
 * User Interaction:
 * - As the user types into the search input, the `onChange` method is triggered which:
 *   - Emits the entire category list if the search input is empty.
 *   - Filters the category list based on the input name and emits the filtered list.
 * - The `handleToggle` method is designed to toggle the display state (`opened` property)
 *   of the search component, potentially to show or hide additional details or controls.
 *
 * Dependencies:
 * - ProductCategory type: Represents the structure of an individual product category.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductCategory } from 'src/app/shared/types/product-category';

@Component({
  selector: 'app-product-category-search',
  templateUrl: './product-category-search.component.html',
  styleUrls: ['./product-category-search.component.css'],
})
export class ProductCategorySearchComponent {
  @Input({ required: true }) categoryList!: ProductCategory[];
  @Output() onSearchEvent = new EventEmitter<ProductCategory[]>();
  name = new FormControl('');
  opened = false;

  handleToggle = () => {
    this.opened = !this.opened;
  };
  onChange() {
    //return original array if name is empty
    if (this.name.value === '') {
      this.onSearchEvent.emit(this.categoryList);
    }
    const filterByName = this.categoryList.filter((category) =>
      category.name
        .toLowerCase()
        .includes(this.name.value?.toLocaleLowerCase() ?? '')
    );
    this.onSearchEvent.emit(filterByName);
  }
}
