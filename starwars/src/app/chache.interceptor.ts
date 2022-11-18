import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { ApiService } from './api.service';
const TIME_TO_LIVE = 600000;
@Injectable()
export class ChacheInterceptor implements HttpInterceptor {
  // private cache= new Map()
  constructor(private cacheservice:ApiService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  if(request.method ! == 'GET'){
    return next.handle(request)
  }
  const cachedResponse = this.cacheservice.get(request.url);

  return cachedResponse ? of(cachedResponse) :this.sendRequest(request,next);
  }

  sendRequest(
    req:HttpRequest<any>,
    next:HttpHandler
  ):Observable<HttpEvent<any>>{
    return next.handle(req).pipe(
      tap((event:any)=>{
        if(event instanceof HttpResponse){
          this.cacheservice.set(req.url,event,TIME_TO_LIVE)
        }

      })
    );
  }

  
}


