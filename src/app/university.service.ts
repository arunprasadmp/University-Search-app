import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private apiUrl = 'http://universities.hipolabs.com/search';

  constructor(private http: HttpClient) { }

  getUniversities(country: string): Observable<{ data: any[], statusCode: number, duration: number }> {
    const start = Date.now();
    return this.http.get<any[]>(`${this.apiUrl}?country=${country}`, { observe: 'response' }).pipe(
      map((response: HttpResponse<any[]>) => {
        const duration = Date.now() - start;
        return {
          data: response.body || [],
          statusCode: response.status,
          duration: duration
        };
      }),
      catchError((error: HttpErrorResponse) => {
        const duration = Date.now() - start;
        return throwError({
          error: error.message,
          statusCode: error.status,
          duration: duration
        });
      })
    );
  }
}
