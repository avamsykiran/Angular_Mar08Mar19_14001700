import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*
      any modification to the request before it is sent out.
      1. modifing the protocol from http to https.
      2. adding a cusotm header ...
    */
    return next.handle(request)
    .pipe(
      catchError((err) => {
        console.log(err);
        throw "Sorry Unable to process the request. Please try later";
      })
    );;
  }
}
