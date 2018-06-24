import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  websiteData: any;
  latestOrders: any;
  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    };
    // 流量來源資料
    this.websiteData = [
      {
        icon: 'facebook',
        url: 'Facebook.com',
        quality: '45836',
        rate: 20
      },
      {
        icon: 'google',
        url: 'Google.com',
        quality: '23582',
        rate: 12
      },
      {
        icon: 'shopping-cart',
        url: 'Shopify.com',
        quality: '2489',
        rate: -15
      },
      {
        icon: 'wordpress',
        url: 'Wordpress.com',
        quality: '1057',
        rate: -30
      }
    ];
    // 最新訂單
    this.latestOrders = [
      {
        title: 'T-shirt',
        time: new Date('2018/6/13 13:30:12'),
        name: '王小明',
        total: 3200
      },
      {
        title: '夾克',
        time: new Date('2018/6/13 10:45:12'),
        name: '徐強強',
        total: 2800
      },
      {
        title: '外套',
        time: new Date('2018/6/13 8:26:12'),
        name: '美美',
        total: 1600
      }
    ];
  }

  ngOnInit() {}
  processRate(rate) {
    return Math.abs(rate) + '%';
  }
}
