import { Component, OnInit } from '@angular/core';
import { SharedHttpService } from 'src/app/shared/shared-http.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {
  [x: string]: any;
  listFood: any[]
  constructor(public http: SharedHttpService) { }

  ngOnInit() {
    this.getPrediction()
  }

  getPrediction() {
    this.http.get('/food', null).subscribe((response: any) => {
      this.listFood = response
    })
  }

  onClickSubmit(data){
    console.log(this.listFood)
    this.http.post('/order',null,this.listFood).subscribe((response:any)=>{
      console.log(data)
    })
  }

}
