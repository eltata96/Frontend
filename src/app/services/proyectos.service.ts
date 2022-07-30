import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
private apiServerUrl='https://portfoliopunteri.herokuapp.com';

  constructor(private http:HttpClient) { }

  public getProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${this.apiServerUrl}/proyectos/all`);
    }
    public addProyectos(Proyectos: Proyectos):Observable<Proyectos>{
      return this.http.post<Proyectos>(`${this.apiServerUrl}/proyectos/add`, Proyectos);
    }
    public updateProyectos(Proyectos: Proyectos):Observable<Proyectos>{
      return this.http.put<Proyectos>(`${this.apiServerUrl}/proyectos/update`, Proyectos);
    }
    public deleteProyectos(ProyectosId: number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/proyectos/delete/${ProyectosId}`);
    }
  
}
