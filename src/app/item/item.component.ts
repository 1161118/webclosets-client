import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';
import {Item} from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[];
  item: Item;
  posttItem: Item;
  putItem: Item;
  delItem: Item;

  idProdItemPost: string;
  heightItemPost: string;
  widthItemPost: string;
  depthItemPost: string;
  materialItemPost: string;

  idProdItemPut: string;
  materialItemPut: string;
  finishItemPut: string;
  heightItemPut: string;
  widthItemPut: string;
  depthItemPut: string;


  idGetItem: number;
  idDeleteItem: number;
  idPutItem: number;


  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  getItem(): void {

    this.itemService.getItem(this.idGetItem).subscribe(item => this.item = item);
  }

  deleteItem(): void {
    this.itemService.deleteItem(this.idDeleteItem).subscribe(delItem => this.delItem = delItem);
  }

  postItem(): void {
    // tslint:disable-next-line:max-line-length
    const itemString = '{ "childItems": [], "product_id": ' + this.idProdItemPost + ',"height": ' + this.heightItemPost + ',"width": ' + this.widthItemPost + ',"depth": ' + this.depthItemPost + ', "material_id": ' + this.materialItemPost + '}';
    console.log(itemString);
    const itemJSON = JSON.parse(itemString);
    this.itemService.postItem(itemJSON).subscribe(posttItem => this.posttItem = posttItem);
  }

  puttItem(): void {
    // tslint:disable-next-line:max-line-length
    const itemString = '{ "product_id": ' + this.idProdItemPut + ',"height": ' + this.heightItemPut + ',"width": ' + this.widthItemPut + ',"depth": ' + this.depthItemPut + ', "material_id": ' + this.materialItemPut + ', "finish_id": ' + this.finishItemPut + '}';
    console.log(itemString);
    const itemJSON = JSON.parse(itemString);
    this.itemService.putItem(this.idPutItem, itemJSON).subscribe(putItem => this.putItem = putItem);
  }
}
