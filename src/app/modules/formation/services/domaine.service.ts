import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domaine } from 'src/app/entities/Formation/domaine';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {
  private _domaines: Domaine[] = [];
  constructor( private http: HttpClient) { }
  private static readonly _apiUrl = `http://it-training-bdd.cloudapps-cm.com:8081/FormationRestApi/rest/domaine`;

  public getAllFormations(): Observable<Domaine[]>{
    return this.http.get<Domaine[]>(`${DomaineService._apiUrl}`);
  }
}
