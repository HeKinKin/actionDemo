import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 定义一个数组，接收从服务里面传来的参数
  public  products: Product[];
  public  imgUrl = 'http://placehold.it/320×150';
  // 注入服务
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProduct();
  }

}


