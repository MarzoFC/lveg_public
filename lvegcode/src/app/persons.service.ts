import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Person } from './shared/models/person.interface';
import { Injectable } from "@angular/core";


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json"})
};


@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  url = "https://la-vida-es-gratis.herokuapp.com";


  constructor(private http: HttpClient) { }

  addPerson(person: any): Observable<any> {
    return this.http.post(this.url, person,httpOptions);
  }

  insert(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.url}/`, person, httpOptions);
  }

  getVoces():Observable<Person[]>{
    return this.http.get<Person[]>(`${this.url}/vocs`);
  }

  getProds(){
    return this.http.get(`${this.url}/productorxs`);
  }

  getEstus(){
    return this.http.get(`${this.url}/estudios`);
  }

  getViss(){
    return this.http.get(`${this.url}/visuales`);
  }

}
