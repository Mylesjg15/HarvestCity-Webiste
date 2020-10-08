import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

const registerUrl = "http://localhost:3000/register"
const loginUrl = "http://localhost:3000/login"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register( user ): Observable<User> {
    return this.http.post<User>(registerUrl, user)
  }

  login( creds: any ): Observable<any> {
    return this.http.post<any>(loginUrl, creds).pipe(map((user) => {
      localStorage.setItem('user', JSON.stringify(user))
    }))
  }

}
