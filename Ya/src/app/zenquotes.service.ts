import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZenquotesService {
  private apiUrl = 'https://qapi.vercel.app/api/random';

  constructor(private http: HttpClient) {}

  getQ(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
