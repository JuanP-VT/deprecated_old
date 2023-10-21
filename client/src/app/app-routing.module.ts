import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AddNewCategoryComponent } from './admin/add-new-category/add-new-category.component';
import { ProductCategoryComponent } from './admin/product-category/product-category.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'new-category', component: AddNewCategoryComponent },
      { path: 'product-category', component: ProductCategoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
