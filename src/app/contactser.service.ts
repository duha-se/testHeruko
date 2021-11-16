import { Injectable } from '@angular/core';
// import employees from '../app/employees.json'
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs' ;
import { Contact } from './Contact';

const baseUrl="http://localhost:3000/contacts";
// const url="https://jsonplaceholder.typicode.com/posts"
@Injectable({
  providedIn: 'root'
})
export class ContactserService {

constructor(private httpClient: HttpClient){}

readAlls(): Observable<any> {
  return this.httpClient.get(baseUrl);
}
readSingleContact(id:string): Observable<Contact> {
  return this.httpClient.get<Contact>(baseUrl +"/" + id);
}

updateSingleContact(id:string , updContact :Contact): Observable<Contact>{
    return this.httpClient.put<Contact>(baseUrl + "/" + id , updContact);

  }
  deleteSingleContact(id:string): Observable<Contact>{
    return this.httpClient.delete<Contact>(baseUrl + "/" + id);

  }
  addSingleContact(newContact : Contact): Observable<Contact>{
    return this.httpClient.post<Contact>(baseUrl , newContact);
  }
  
}
