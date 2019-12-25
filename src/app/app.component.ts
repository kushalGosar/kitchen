import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'kitchenAJ';
  isLoading: boolean

  constructor(public router: Router,) {
    this.router.navigate(['/kitchen/dashboard'])
  }

  ngOnInit() {
    
  }

}
