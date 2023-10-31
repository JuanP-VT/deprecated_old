package com.pb.fashion.controllers;

import com.pb.fashion.models.ProductCategory;
import com.pb.fashion.services.ProductCategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product-category")

public class ProductCategoryController {

    @Autowired
    private ProductCategoryService productCategoryService;

    @GetMapping
    public List<ProductCategory> getProductCategory() {
        return productCategoryService.getProductCategoryList();
    }

    @PostMapping
    public ResponseEntity<?> saveProductCategory(@Valid @RequestBody ProductCategory productCategory, BindingResult result) {

        //Field Validation
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
        try {
            // Try to create
            ProductCategory newProductCategory = productCategoryService.saveProductCategory(productCategory);
            return new ResponseEntity<ProductCategory>(newProductCategory, HttpStatus.CREATED);

        } catch (DataIntegrityViolationException e) {
            // Handle unique constraint violation
            return new ResponseEntity<String>("Name already exists", HttpStatus.CONFLICT);
        } catch (Exception e) {
            // Handle other exceptions
            return new ResponseEntity<String>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
