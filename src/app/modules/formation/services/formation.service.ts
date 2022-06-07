import { Injectable } from '@angular/core';
import { Formation } from 'src/app/entities/Formation/formation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private _formations: Formation[] = [];
  constructor( private http: HttpClient) { }
  private static readonly _apiUrl = `http://it-training-bdd.cloudapps-cm.com:8081/FormationRestApi/rest/formation`;

  public getAllFormations(): Observable<Formation[]>{
    return this.http.get<Formation[]>(`${FormationService._apiUrl}`);
  }

  public getFormByStheme(id:number) : Observable<Formation[]>{
    return this.http.get<Formation[]>(`${FormationService._apiUrl}/stheme/${id}`);
  }

  public getFormByTheme(id:number) : Observable<Formation[]>{
    return this.http.get<Formation[]>(`${FormationService._apiUrl}/theme/${id}`);
  }

}
