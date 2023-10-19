//Input a list of product category,
// component will have internally an input so the user type a name
// componenet will filter the given input array by name and return it to the parent component
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
  @Output() customEvent = new EventEmitter<ProductCategory[]>();
  name = new FormControl('');

  onChange() {
    //return original array if name is empty
    if (this.name.value === '') {
      this.customEvent.emit(this.categoryList);
    }
    const filterByName = this.categoryList.filter((category) =>
      category.name
        .toLowerCase()
        .includes(this.name.value?.toLocaleLowerCase() ?? '')
    );
    this.customEvent.emit(filterByName);
  }
}