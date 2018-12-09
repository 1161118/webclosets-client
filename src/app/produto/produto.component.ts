import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Produto} from '../produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  products: Produto[];
  produto: Produto;
  delProduto: Produto;
  postProduct: Produto;
  putProduct: Produto;

  namePostProduto: string;
  materialPostProduto: string;
  categoryPostProduto: string;
  dimensionPostProduto: string;

  materialPutProduto: string;
  categoryPutProduto: string;
  dimensionPutProduto: string;

  idGetProduto: number;
  idDeleteProduto: number;
  idPutProduto: number;


  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    // this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  getProduct(): void {

    this.productService.getProduct(this.idGetProduto).subscribe(product => this.produto = product);
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.idDeleteProduto).subscribe(delProduto => this.delProduto = delProduto);
  }

  postProduto(): void {
    // tslint:disable-next-line:max-line-length
    const prodString = '{ "name": "' + this.namePostProduto + '", "materialsIds": [' + this.materialPostProduto + '], "categoryId": ' + this.categoryPostProduto + ', "dimensionsId": ' + this.dimensionPostProduto + '}';
    const prodJSON = JSON.parse(prodString);
    this.productService.postProduct(prodJSON).subscribe(postProduct => this.postProduct = postProduct);
  }

  putProduto(): void {
    // tslint:disable-next-line:max-line-length
    const prodString = '{ "id": ' + this.idPutProduto + ', "materialsIds": [' + this.materialPutProduto + '], "categoryId": ' + this.categoryPutProduto + ', "dimensionsId": ' + this.dimensionPutProduto + '}';
    const prodJSON = JSON.parse(prodString);
    this.productService.putProduct(this.idPutProduto, prodJSON).subscribe(putProduct => this.putProduct = putProduct);
  }

}
