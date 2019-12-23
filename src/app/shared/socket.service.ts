import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})

export class SocketService {
  listOfData = this.socket.fromEvent('document')
  constructor(private socket: Socket) { }

  addData(data) {
    this.socket.emit('addData', data)
  }
}
