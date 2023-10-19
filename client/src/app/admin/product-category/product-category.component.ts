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
        this.categoryList = response.data;
        this.filteredCategoryList = response.data;
      }
    });
  }

  handleEvent(event: ProductCategory[]) {
    this.filteredCategoryList = event;
  }
}
