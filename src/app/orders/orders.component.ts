import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderList: any;
  cols: any;
  clickedIndex: number;
  buttonItems: MenuItem[];
  constructor(private service: DataService) {}

  ngOnInit() {
    this.service.getOrderList().subscribe(e => {
      let index = 0;
      this.orderList = e;
      this.orderList.forEach(order => {
        order.index = index;
        index++;
      });
      console.log(this.orderList);
    });
    this.cols = [
      { field: 'customer', header: '顧客名稱' },
      { field: 'product', header: '產品' },
      { field: 'total', header: '總計' },
      { field: 'addTime', header: '加入購物車時間' },
      { field: 'checkoutTime', header: '結帳時間' },
      { field: 'address', header: '地址' },
      { field: 'status', header: '狀態' }
    ];
    this.buttonItems = [
      {
        label: '已付款',
        command: (event) => {
          // event.originalEvent: Browser event
          // event.item: menuitem metadata
          this.orderList[this.clickedIndex].status = 1;
        }
      },
      {
        label: '未付款',
        command: (event) => {
          this.orderList[this.clickedIndex].status = 2;
        }
      },
      {
        label: '運送中',
        command: (event) => {
          this.orderList[this.clickedIndex].status = 3;
        }
      },
      {
        label: '完成',
        command: (event) => {
          this.orderList[this.clickedIndex].status = 4;
        }
      }
    ];
  }
  processStatus(status) {
    switch (status) {
      case 1:
        return '已付款';
      case 2:
        return '未付款';
      case 3:
        return '運送中';
      case 4:
        return '完成';
    }
  }
  processButton(status) {
    switch (status) {
      case 1:
        return 'paid';
      case 2:
        return 'unpaid';
      case 3:
        return 'shipping';
      case 4:
        return 'done';
    }
  }
  clickIndex(index) {
   this.clickedIndex = index;
  }
}
// customer
// product
// total
// addTime
// checkoutTime
// address
// status
// 1:paid
// 2:unpaid
// 3:shipping
// 4:done
