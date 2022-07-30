import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/JwtDto';
import { LoginUsuario } from '../models/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://portfoliopunteri.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
 }
}
