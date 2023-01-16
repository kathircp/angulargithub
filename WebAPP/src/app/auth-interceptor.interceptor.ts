import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(public http: HttpClient, private route : Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let token = localStorage.getItem('jwt');

        if (token) {
          request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`                    
                }
            } );
        }

        return next.handle(request);
   
  }
}
