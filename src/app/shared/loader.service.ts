import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  show() {
    this.loader.next(true);
  }

  hide() {
    this.loader.next(false);
  }

}
