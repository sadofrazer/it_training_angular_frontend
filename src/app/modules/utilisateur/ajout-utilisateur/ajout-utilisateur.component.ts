import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';


@Component({
  selector: 'app-ajout-utilisateur',
  template: `
    
    <h2 class="center">Ajout</h2>
  <app-utilisateur-form  [utilisateur]="utilisateur"></app-utilisateur-form>
  `
 
})
export class AjoutUtilisateurComponent implements OnInit {

 utilisateur: Utilisateur;

  ngOnInit(){
   this.utilisateur = new Utilisateur();
  
  }

}
