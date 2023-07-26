import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  private baseUrl = ''

  constructor(private http: HttpClient) {   }

  makelogin(data:any){
    return this.http.post(`${this.baseUrl}`,data)
  }
}
