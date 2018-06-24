import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productList = [
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      origin: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    }
  ];
  constructor() { }
  getProductList() {
    console.log('asd');
    return this.productList;
  }
}
