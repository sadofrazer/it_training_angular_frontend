import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, of } from "rxjs";
import { Apprenant } from "src/app/entities/Utilisateur/Apprenant";
import { TypeUser } from "src/app/entities/Utilisateur/typeuser";




@Injectable({
    providedIn: 'root'
  })
  //http://it-training-bdd.cloudapps-cm.com:8082/UtilisateurRestApi/rest/utilisateur
  export class ApprenantService {
  updateUtilisateur(apprenant: Apprenant) {
    throw new Error('Method not implemented.');
  }
  
    constructor (private http: HttpClient){
  
     }
    
     
     getApprenanttList(): Observable<Apprenant[]>{
      return this.http.get<Apprenant[]>('http://localhost:8080/UtilisateurRestApi/rest/apprenants').pipe(
       tap((respose)=> this.log(respose)),
       catchError((error)=> this.mesErrors(error,[]))
      );
     }
     getApprenantById(utilisateurId: number): Observable<Apprenant|undefined>{
      return this.http.get<Apprenant>(`http://localhost:8080/UtilisateurRestApi/rest/apprenants/${utilisateurId}`).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,undefined))
        );
    }
    updateApprenant(apprenant: Apprenant): Observable<null>{
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  
      return this.http.put('http://localhost:8080/UtilisateurRestApi/rest/apprenants', apprenant, httpOptions).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,null))
        );
      
    }
    
    deleteUtilisateurById(utilisateurId: number): Observable<null>{
       return this.http.delete(`http://localhost:8080/UtilisateurRestApi/rest/apprenants/${utilisateurId}`).pipe(
        tap((respose)=> this.log(respose)),
        catchError((error)=> this.mesErrors(error,null))
        );
       
    }
    addApprenant(apprenant: Apprenant): Observable<Apprenant>{
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  
      return this.http.post<Apprenant>(`http://localhost:8080/UtilisateurRestApi/rest/apprenants`, apprenant, httpOptions).pipe(
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