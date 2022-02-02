import { Car } from './../interfaces/car';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getAllCarsByType(type): Observable<any> {
    return this.http.get(`${this.baseUrl}cars/`, {
      params: {
        type: type
      }
    });
  }

  getByMake(params): Observable<any> {
    return this.http.get(`${this.baseUrl}carsModel/`, {
      params: {
        make: params.make,
        type: params.type
      }
    })
  }
}
