import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('pasó por el interceptor');

    const token = 'example'

    this.validarToken(token)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    const reqClone = req.clone({
      headers
    });
    console.log(reqClone);
    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    )
    
  }
  manejarError(error:HttpErrorResponse){
    console.log('Sucedió un error');
    console.log('ERROR',error)
    return throwError('Error Prueba');
  }

  validarToken(token: string){
    if(token != 'example'){
      alert('EL TOKEN ES INCORRECTO')
      window.location.reload()
    }
  }
  
}
