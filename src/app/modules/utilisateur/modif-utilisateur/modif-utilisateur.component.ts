import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/entities/Utilisateur/utilisateur';

import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-modif-utilisateur',
  template: `
    <h2 class="center">
     Modifier {{ utilisateur?.nom}}</h2>
    
    <app-utilisateur-form *ngIf="utilisateur" [utilisateur]="utilisateur"></app-utilisateur-form>
  `,
  styles: [
  ]
})
export class ModifUtilisateurComponent implements OnInit {

  utilisateur: Utilisateur|undefined;

  constructor(private route: ActivatedRoute, private utilisateurService: UtilisateurService )  { }

  ngOnInit() {
    const utilisateurId: string|null = this.route.snapshot.paramMap.get('idUtilisateur');
    if(utilisateurId){
      /* sans observable
      this.utilisateur = this.utilisateurService.getutilisateurById(+utilisateurId);*/
      
      this.utilisateurService.getUtilisateurById(+utilisateurId).subscribe(utilisateur => this.utilisateur = utilisateur);


    }else{
      this.utilisateur = undefined;
    }
  }

}
