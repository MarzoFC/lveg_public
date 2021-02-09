import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json"})
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  

  url = "https://la-vida-es-gratis.herokuapp.com/autenticar";


  constructor(private http: HttpClient) { }

  login(person: any): Observable<any> {
    return this.http.post(this.url, person,httpOptions);
  }


}
