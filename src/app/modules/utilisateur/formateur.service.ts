import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, of } from "rxjs";
import { Formateur } from "src/app/entities/Utilisateur/Formateur";
import { TypeUser } from "src/app/entities/Utilisateur/typeuser";



@Injectable({
    providedIn: 'root'
  })
  //http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/utilisateur
  export class FormateurService {
    APIFORM = "http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/formateurs"
    LASTAPIFORM = 'http://localhost:8080/UtilisateurRestApi/rest/formateurs';
    APITYPE = `http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/typeuser`;
    constructor (private http: HttpClient){
  
     }
    
     
     getFormateurtList(): Observable<Formateur[]>{
      return this.http.get<Formateur[]>(this.APIFORM).pipe(
       tap((respose)=> this.log(respose)),
       catchError((error)=> this.mesErrors(error,[]))
      );
     }
     getFormateurById(utilisateurId: number): Observable<Formateur|undefined>{
      return this.http.get<Formateur>(`http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/formateurs/${utilisateurId}`).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,undefined))
        );
    }
    updateFormateur(formateur: Formateur): Observable<null>{
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  
      return this.http.put(this.APIFORM, formateur, httpOptions).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,null))
        );
      
    }
    
    deleteUtilisateurById(utilisateurId: number): Observable<null>{
       return this.http.delete(`http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/formateurs/${utilisateurId}`).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,null))
        );
       
    }
    addFormateur(Formateur: Formateur): Observable<Formateur>{
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  
      return this.http.post<Formateur>(this.APIFORM, Formateur, httpOptions).pipe(
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
   /* on retoune un constante synchone 
    getUtilisateurList(): Utilisateur[]{
      return UtilisateurS;
    }*/
  /* pareille ^
    getUtilisateurById(UtilisateurId: number): Utilisateur|undefined{
      return UtilisateurS.find(Utilisateur => Utilisateur.id == UtilisateurId);
    }*/
  
    getUtilisateurTypeList(): Observable<TypeUser[]>{
    
      return this.http.get<TypeUser[]>(this.APITYPE).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error, []))
        );
    }
  }