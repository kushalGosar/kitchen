import { Component, OnInit } from '@angular/core';
import { SharedHttpService } from 'src/app/shared/shared-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {

  listFood: any[]
  constructor(public http: SharedHttpService, public router: Router) { }

  ngOnInit() {
    this.getPrediction()
  }

  getPrediction() {
    this.http.get('/food', null).subscribe((response: any) => {
      this.listFood = response
    })
  }

  onClickSubmit(data) {
    console.log(this.listFood)
    this.http.post('/order', null, this.listFood).subscribe((response: any) => {
      this.http.successMessage();
      this.router.navigate(['/kitchen/dashboard']);
    }, (err) => {
      this.http.errorMessage(err.error.message);
    })
  }

}
