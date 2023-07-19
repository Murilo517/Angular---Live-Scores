import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private baseURL:string = 'https://api.opendota.com/api'

  constructor(private http: HttpClient) { 

  }
   
  getMatches(){
    return this.http.get(this.baseURL)
  }
  
}
