import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productList = [
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 10,
      status: 1
    },
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 22,
      status: 0
    },
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 25,
      status: 0
    },
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 57,
      status: 1
    },
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 40,
      status: 0
    },
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 58,
      status: 1
    },
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 87,
      status: 1
    },
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 55,
      status: 0
    },
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 3,
      status: 1
    },
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    },
    {
      product: '我的假髮',
      original: 600,
      discount: 240,
      size: 'M',
      color: '黃',
      inventory: 20,
      status: 1
    }
  ];
  orderList = [
    {
      customer: '珍娜',
      product: '強效紅水',
      total: 9487,
      addTime: new Date('2018/6/13 13:30:12'),
      checkoutTime: new Date('2018/6/13 13:30:12'),
      address: '東部王國暴風大教堂',
      status: 1
    },
    {
      customer: '希瓦納斯',
      product: '傳送符文',
      total: 5555,
      addTime: new Date('2018/6/12 17:45:12'),
      checkoutTime: new Date('2018/6/12 22:22:12'),
      address: '奎爾薩拉斯',
      status: 2
    },
    {
      customer: '派奇',
      product: '強效紅水',
      total: 3333,
      addTime: new Date('2018/5/1 8:30:12'),
      checkoutTime: new Date('2018/5/20 9:30:12'),
      address: '藏寶海灣巨大雕像第十金庫',
      status: 3
    },
    {
      customer: '加摩爾',
      product: '一日千死',
      total: 1,
      addTime: new Date('2018/6/13 13:30:12'),
      checkoutTime: new Date('2018/6/13 13:30:12'),
      address: '達拉然下水道左邊數來第三個屍體',
      status: 4
    },
    {
      customer: '瑪法理恩',
      product: '樹動王秘笈',
      total: 100,
      addTime: new Date('2018/6/13 13:30:12'),
      checkoutTime: new Date('2018/6/13 13:30:12'),
      address: '海加爾山',
      status: 1
    },
    {
      customer: '伊力丹',
      product: '蛋刀模型',
      total: 6666,
      addTime: new Date('2018/6/13 13:30:12'),
      checkoutTime: new Date('2018/6/13 13:30:12'),
      address: '外域影月谷黑暗神廟',
      status: 2
    },
  ];
  constructor() {}
  getProductList() {
    console.log('service產品');
    return of(this.productList);
  }
  getOrderList() {
    console.log('service訂單');
    return of(this.orderList);
  }
}
