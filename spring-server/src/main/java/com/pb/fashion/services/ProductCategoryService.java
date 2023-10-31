package com.pb.fashion.services;

import com.pb.fashion.models.ProductCategory;
import com.pb.fashion.repositories.ProductCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductCategoryService {
    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    //Request category list
    public List<ProductCategory> getProductCategoryList() {
        return productCategoryRepository.findAll();
    }

    //Save new category
    public ProductCategory saveProductCategory(ProductCategory productCategory) {
        return productCategoryRepository.save(productCategory);
    }
}
