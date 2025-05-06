import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getExampleData(): Observable<any> {
    return this.http.get('assets/data.json');
  }
}
