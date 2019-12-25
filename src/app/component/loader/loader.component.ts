import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: any;

  constructor(private loader: LoaderService) { }

  ngOnInit() {
    this.loader.loader.subscribe(value => {
      this.isLoading = value
    })
  }

}
