/**
 * AddNewCategoryComponent is an Angular component that allows users to add new product categories.
 * It provides a form with fields for category name and image URL, implemented using reactive forms,
 * and on submission, it communicates with the ProductCategoryService to create a new product category.
 *
 * @class AddNewCategoryComponent
 */

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import productCategory from 'src/app/shared/factory/product-category';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css'],
})
export class AddNewCategoryComponent {
  name = new FormControl('');
  imageUrl = new FormControl('');
  feedback = '';

  //Inject product category service
  constructor(public productCategoryService: ProductCategoryService) {}

  //This method is executed when the user actions the form button
  handleSubmit = () => {
    const formatName = this.name.value || '';
    const formatImageUrl = this.imageUrl.value || '';
    const newProductCategory = productCategory(formatName, formatImageUrl);

    //Call create category from product category service
    this.productCategoryService.createCategory(newProductCategory).subscribe(
      (response) => {
        //Api response can either be valid or invalid so we have to manage both scenarios
        if (response.error) {
          //Display validation error feedback
          this.feedback = response.error?.message ?? 'xd';
        } else {
          //Send feedback on success
          this.feedback = 'Category Added!';
          //Reset forms & feedback after 2000ms
          setTimeout(() => {
            this.name = new FormControl('');
            this.imageUrl = new FormControl('');
            this.feedback = '';
          }, 2000);
        }
      },
      (error) => {
        this.feedback = error?.error?.message ?? 'An error occurred';
      }
    );
  };
}
