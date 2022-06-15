import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, of } from "rxjs";
import { TypeUser } from "./typeuser";
import { Formateur } from "./Formateur";


@Injectable({
    providedIn: 'root'
  })
  //http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/utilisateur
  export class FormateurService {
  
    constructor (private http: HttpClient){
  
     }
    
     
     getFormateurtList(): Observable<Formateur[]>{
      return this.http.get<Formateur[]>('http://localhost:8080/UtilisateurRestApi/rest/formateurs').pipe(
       tap((respose)=> this.log(respose)),
       catchError((error)=> this.mesErrors(error,[]))
      );
     }
     getFormateurById(utilisateurId: number): Observable<Formateur|undefined>{
      return this.http.get<Formateur>(`http://localhost:8080/UtilisateurRestApi/rest/formateurs/${utilisateurId}`).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,undefined))
        );
    }
    updateFormateur(formateur: Formateur): Observable<null>{
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  
      return this.http.put('http://localhost:8080/UtilisateurRestApi/rest/formateurs', formateur, httpOptions).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,null))
        );
      
    }
    
    deleteUtilisateurById(utilisateurId: number): Observable<null>{
       return this.http.delete(`http://localhost:8080/UtilisateurRestApi/rest/formateurs/${utilisateurId}`).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,null))
        );
       
    }
    addFormateur(Formateur: Formateur): Observable<Formateur>{
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  
      return this.http.post<Formateur>(`http://localhost:8080/UtilisateurRestApi/rest/formateurs`, Formateur, httpOptions).pipe(
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
    
      return this.http.get<TypeUser[]>(`http://localhost:8080/UtilisateurRestApi/rest/typeuser`).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error, []))
        );
    }
  }