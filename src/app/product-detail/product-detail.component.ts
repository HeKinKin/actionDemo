import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from '../shared/product.service';
import {CommentStmt} from '@angular/compiler';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productId: number;
  comments: Comment[];
  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.productId = this.routeInfo.snapshot.params.productId;
    this.product = this.productService.getproduct(this.productId);
    console.log('查出的结果是' + this.product);
    this.comments = this.productService.getCommentsForProductId(this.productId);
  }

}
