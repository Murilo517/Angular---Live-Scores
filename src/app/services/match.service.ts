import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imatch } from '../interfaces/matches.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private baseURL:string = 'https://api.opendota.com/api'

  constructor(private http: HttpClient) {   }
   
  getMatches(): Observable<Imatch[]>{
    return this.http.get<Imatch[]>(`${this.baseURL}/proMatches`)
  }

  getMatchById(matchId:string): Observable<any>{
    return this.http.get(`${this.baseURL}/matches/${matchId}`)
  }
  
}
