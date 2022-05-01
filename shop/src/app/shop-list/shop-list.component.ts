import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  items = [
    {name: 'carrot',
  price: 1.99},
    {name: 'apple',
  price: 2.99}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
