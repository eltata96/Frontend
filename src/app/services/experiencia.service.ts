import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
private apiServerUrl='https://portfoliopunteri.herokuapp.com';

  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/all`);
    }
    public addExperiencia(Experiencia: Experiencia):Observable<Experiencia>{
      return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencia/add`, Experiencia);
    }
    public updateExperiencia(Experiencia: Experiencia):Observable<Experiencia>{
      return this.http.put<Experiencia>(`${this.apiServerUrl}/experiencia/update`, Experiencia);
    }
    public deleteExperiencia(ExperienciaId: number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/experiencia/delete/${ExperienciaId}`);
    }
  
}
