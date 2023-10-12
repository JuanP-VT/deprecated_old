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
  constructor(private productCategoryService: ProductCategoryService) {}

  handleSubmit = () => {
    const formatName = this.name.value || '';
    const formatImageUrl = this.imageUrl.value || '';
    const newProductCategory = productCategory(formatName, formatImageUrl);

    //Call product category service
    this.productCategoryService
      .createCategory(newProductCategory)
      .subscribe((response) => {
        //Api response can either be valid or invalid so we have to manage both scenarios
        //On successful response
        if (response.error) {
          //Display validation error feedback
          this.feedback = response.error?.message ?? '';
        } else {
          this.feedback = 'Category Added!';
          setTimeout(() => {
            this.name = new FormControl('');
            this.imageUrl = new FormControl('');
            this.feedback = '';
          }, 2000);
        }
      });
  };
}
