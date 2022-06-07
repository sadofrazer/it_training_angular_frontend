import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/entities/Formation/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _formations: Theme[] = [];
  constructor( private http: HttpClient) { }
  private static readonly _apiUrl = `http://it-training-bdd.cloudapps-cm.com:8081/FormationRestApi/rest/theme`;

  public getAllThemes(): Observable<Theme[]>{
    return this.http.get<Theme[]>(`${ThemeService._apiUrl}`);
  }
}
