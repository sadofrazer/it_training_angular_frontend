import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/entities/Utilisateur/utilisateur';
import { UtilisateurService } from '../utilisateur.service';


@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  
  
})
export class ListUtilisateurComponent {

  utilisateurList: Utilisateur[] ;
 


  constructor(private router: Router, private utilisateurService: UtilisateurService){}

  ngOnInit(){
  

  this.utilisateurService.getUtilisateurList().subscribe(
     utilisateurList => this.utilisateurList = utilisateurList,
  );
 
    
}
all(){
  this.utilisateurService.getUtilisateurList().subscribe(
    utilisateurList => this.utilisateurList = utilisateurList,
 );
}
app(){
  this.utilisateurService.getApprenantList().subscribe(
    utilisateurList => this.utilisateurList = utilisateurList,
 );
}
form(){
  this.utilisateurService.getFormateurtList().subscribe(
    utilisateurList => this.utilisateurList = utilisateurList,
 );
}
resp(){
  this.utilisateurService.getAdminList().subscribe(
    utilisateurList => this.utilisateurList = utilisateurList,
 );
}
//methode d'affichage par id
  goToUtilisateur(utilisateur: Utilisateur){
    this.router.navigate(['utilisateur/',utilisateur.idUtilisateur])
  }
}
