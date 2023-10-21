/**
 * ProductCategoryComponent
 *
 * A component responsible for displaying and managing a list of product categories.
 *
 * Features:
 * - Fetches and displays a list of product categories on initialization.
 * - Provides an interface for child components to request an updated list of product categories.
 * - Allows filtering of the displayed list of product categories through a search functionality.
 *
 * Behavior:
 * - On initialization (`ngOnInit`), it fetches the full list of product categories from
 *   the `ProductCategoryService` and stores the data in `categoryList`.
 * - Simultaneously, it initializes `filteredCategoryList` to be the same as `categoryList`.
 * - If a child component requests an updated list of product categories using the
 *   `fetchProductCategoryList` method, the component fetches the list again and updates
 *   both `categoryList` and `filteredCategoryList`.
 * - When a search is performed and the `handleSearch` method is triggered ( by a
 *   child component), the displayed list (`filteredCategoryList`) is updated without
 *   altering the original `categoryList`.
 *
 * Dependencies:
 * - ProductCategoryService: Service used to fetch the product categories.
 * - ProductCategory type: Represents the structure of an individual product category.
 */
import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';
import { ProductCategory } from 'src/app/shared/types/product-category';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  constructor(public productCategoryService: ProductCategoryService) {}
  categoryList: ProductCategory[] = [];
  filteredCategoryList: ProductCategory[] = [];
  ngOnInit(): void {
    this.productCategoryService.getCategories().subscribe((response) => {
      if (response.data) {
        this.categoryList = [...response.data];
        this.filteredCategoryList = [...response.data];
      }
    });
  }
  //allow child components request category lists
  fetchProductCategoryList() {
    this.productCategoryService.getCategories().subscribe((response) => {
      if (response.data) {
        this.categoryList = response.data;
        this.filteredCategoryList = response.data;
      }
    });
  }
  //search
  handleSearch(event: ProductCategory[]) {
    this.filteredCategoryList = event;
  }
}
