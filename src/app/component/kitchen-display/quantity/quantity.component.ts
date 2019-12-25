import { Component, OnInit } from '@angular/core';
import { SharedHttpService } from 'src/app/shared/shared-http.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
  listOrders: any[];
  Orders: any;
  orderForm: FormGroup;
  isEmpty: boolean;

  constructor(public http: SharedHttpService, public router: Router) {

  }

  ngOnInit() {
    this.getPrediction()
  }

  getPrediction() {
    this.http.get('/order', null).subscribe((response: any) => {
      if (response.length === 0) {
        this.isEmpty = true;
      }
      else {
        this.isEmpty = false;
        this.Orders = response[0]
        this.listOrders = this.Orders.dailyorders
      }
    })
  }

  onClickSubmit(data) {
    this.Orders.dailyorders = this.listOrders
    this.http.put('/order/' + this.Orders._id, null, this.Orders).subscribe((response: any) => {
      this.http.successMessage();
      this.router.navigate(['/kitchen/dashboard']);
    }, (err) => {
      this.http.errorMessage();
    })
  }
}
