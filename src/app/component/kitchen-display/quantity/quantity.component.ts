import { Component, OnInit } from '@angular/core';
import { SharedHttpService } from 'src/app/shared/shared-http.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
  listOrders: any[];
  Orders: any;
  constructor(public http: SharedHttpService) { }

  ngOnInit() {
    this.getPrediction()
  }

  getPrediction() {
    this.http.get('/order', null).subscribe((response: any) => {
      this.Orders = response[0]
      this.listOrders = this.Orders.dailyorders
    })
  }

  onClickSubmit(data) {
    console.log(this.listOrders)
    this.Orders.dailyorders = this.listOrders
    this.http.put('/order/' + this.Orders._id, null, this.Orders).subscribe((response: any) => {
      console.log(data)
    })
  }
}
