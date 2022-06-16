import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, of } from "rxjs";
import { Responsable } from "src/app/entities/Utilisateur/Responsable";
import { TypeUser } from "src/app/entities/Utilisateur/typeuser";




@Injectable({
    providedIn: 'root'
  })
  //http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/utilisateur
  export class ResponsableService {
  APIRESP = "http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/responsables"
   LASTAPIRESP = 'http://localhost:8080/UtilisateurRestApi/rest/responsables';
   APITYPE = `http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/typeuser`;
    constructor (private http: HttpClient){
  
     }
    
     
     getResponsableList(): Observable<Responsable[]>{
      return this.http.get<Responsable[]>(this.APIRESP).pipe(
       tap((respose)=> this.log(respose)),
       catchError((error)=> this.mesErrors(error,[]))
      );
     }
     getResponsableById(utilisateurId: number): Observable<Responsable|undefined>{
      return this.http.get<Responsable>(`http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/responsables/${utilisateurId}`).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,undefined))
        );
    }
    updateResponsable(responsable: Responsable): Observable<null>{
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  
      return this.http.put(this.APIRESP, responsable, httpOptions).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,null))
        );
      
    }
    
    deleteUtilisateurById(utilisateurId: number): Observable<null>{
       return this.http.delete(`http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/responsables/${utilisateurId}`).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,null))
        );
       
    }
    addResponsable(responsable: Responsable): Observable<Responsable>{
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  
      return this.http.post<Responsable>(this.APIRESP, responsable, httpOptions).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,null))
        );
      
    }
    
    // methode de foctorisaton du code utilisable juste ici
    private log(respose:any){
     console.table(respose);
    }
  private mesErrors(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }
  
  
    getUtilisateurTypeList(): Observable<TypeUser[]>{
    
      return this.http.get<TypeUser[]>(this.APITYPE).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error, []))
        );
    }
  }