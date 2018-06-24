import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: any[];
  cols: any[];
  constructor(private service: DataService) {}

  ngOnInit() {
     this.service.getProductList()
     .subscribe(
       e => {
         console.log(e);
        this.productList = e;
       }
     );
    this.cols = [
      { field: 'product', header: '產品' },
      { field: 'origonal', header: '原價' },
      { field: 'discount', header: '特價' },
      { field: 'size', header: '尺寸' },
      { field: 'color', header: '顏色' },
      { field: 'inventory', header: '數量' },
      { field: 'status', header: '狀態' }
    ];
  }
  processStatus(status) {
    if (status === 0) {
      return '發布';
    } else {
      return '草稿';
    }
  }
  // changeStatus(status){
  //   console.log(status)

  // }
}
// product
// original
// discount
// size
// color
// inventory
// status 0:未發售,1:發售
