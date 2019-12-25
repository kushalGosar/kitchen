import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    private totalRequest = 0;
    constructor(private loader: LoaderService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.totalRequest++;
        this.loader.show()
        return next.handle(request).pipe(
            tap(res => {
                if (res instanceof HttpResponse) {
                    this.decreaseRequest()
                }
            }), catchError(err => {
                this.decreaseRequest();
                throw err;
            })
        )
    }

    private decreaseRequest() {
        this.totalRequest--;
        if (this.totalRequest === 0) {
            this.loader.hide();
        }
    }
}