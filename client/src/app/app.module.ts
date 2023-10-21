import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { StoreNavComponent } from './shared/components/store-nav/store-nav.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewCategoryComponent } from './admin/add-new-category/add-new-category.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ProductCategoryComponent } from './admin/product-category/product-category.component';
import { ProductCategoryCardComponent } from './admin/product-category/product-category-card/product-category-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProductCategorySearchComponent } from './admin/product-category-search/product-category-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductCategoryCardEditComponent } from './admin/product-category/product-category-card/product-category-card-edit/product-category-card-edit.component';
import { ProductCategoryCardViewComponent } from './admin/product-category/product-category-card/product-category-card-view/product-category-card-view.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    StoreNavComponent,
    AdminNavComponent,
    AddNewCategoryComponent,
    ProductCategoryComponent,
    ProductCategoryCardComponent,
    ProductCategorySearchComponent,
    ProductCategoryCardEditComponent,
    ProductCategoryCardViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
