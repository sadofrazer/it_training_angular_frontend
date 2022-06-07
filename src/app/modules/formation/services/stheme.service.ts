import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stheme } from 'src/app/entities/Formation/sous-theme';

@Injectable({
  providedIn: 'root'
})

export class SthemeService {

  private _formations: Stheme[] = [];
  constructor( private http: HttpClient) { }
  private static readonly _apiUrl = `http://it-training-bdd.cloudapps-cm.com:8081/FormationRestApi/rest/stheme`;


  public getAllSthemes() : Observable<Stheme[]>{
    return this.http.get<Stheme[]>(`${SthemeService._apiUrl}`);
  }

  public getSthemeByTheme(id:number) : Observable<Stheme[]>{
    return this.http.get<Stheme[]>(`${SthemeService._apiUrl}/theme/${id}`);
  }


}
