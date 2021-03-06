import { Component, OnInit } from '@angular/core';
import { SharedHttpService } from 'src/app/shared/shared-http.service';
import { SocketService } from '../../../shared/socket.service'
import { Json2csvService } from 'src/app/shared/json2csv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listOrders: any[];
  Orders: any;
  isEmpty: boolean;
  constructor(
    public http: SharedHttpService,
    public socket: SocketService,
    public j2c: Json2csvService) {
    this.socket.listOfData.subscribe((data: any) => {
      if (data) { this.getPrediction() }
    })
  }

  ngOnInit() {
    this.getPrediction()
  }

  getPrediction() {
    this.http.get('/order', null).subscribe((response: any) => {
      if (response.length !== 0) {
        this.Orders = response[0]
        this.listOrders = this.Orders.dailyorders.filter(element => element.totalqunatity > 0 || element.created>0);
        this.listOrders.length > 0 ? this.isEmpty = false : this.isEmpty = true
      }
      else {
        this.isEmpty = true
      }
    })
  }

  onDone(item) {
    let obj = {
      _id: this.Orders._id,
      data: item
    }
    if (item.totalqunatity < 1) {
      alert('No pending quantity');
    }
    else {
      this.socket.addData(obj);
    }
  }

  onDownload() {
    this.j2c.downloadFile(this.listOrders, 'Report', ['name', 'created', 'predicted'])
  }

}
