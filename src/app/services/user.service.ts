import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../data/models/user';
import { Globals } from 'src/globals';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiKey: string;

  constructor(private http: HttpClient, private globals: Globals) {
    this.apiKey = this.globals.API_URL
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiKey}/signUp`, { username: username, password: password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiKey}/login`,
      { username: username, password: password }, { observe: 'response' });
  }
}
