import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  listFilter = 'cart';
  products: IProduct[];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }


   onRatingClicked(message: string): void {
     this.pageTitle = 'Product List: ' + message;
   }
}
