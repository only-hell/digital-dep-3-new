import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';

                    if (error.error instanceof ErrorEvent) {
                        console.log('Это ошибка на клиентской стороне');
                        errorMessage = `Ошибка: ${error.error.message}`;
                    } else {
                        console.log('Это ошибка на серверной стороне');
                        errorMessage = `Код ошибки: ${error.status}, Сообщение: ${error.message}`;
                    }

                    console.log(errorMessage);
                    return throwError(() => new Error(errorMessage));
                })
            );
    }
}
