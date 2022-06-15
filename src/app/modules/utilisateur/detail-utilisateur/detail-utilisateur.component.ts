import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/entities/Utilisateur/utilisateur';

import { ApprenantService } from '../apprenant.service';
import { FormateurService } from '../formateur.service';
import { ResponsableService } from '../responsable.service';

import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html' 
    
 
})
export class DetailUtilisateurComponent implements OnInit {

  utilisateurList: Utilisateur[];
  utilisateur: Utilisateur | undefined;
 
 

  constructor(private route: ActivatedRoute, private router: Router,
    private apprenantService: ApprenantService,
    private responsableService: ResponsableService,
     private formateurService: FormateurService,
     private utilisateurService: UtilisateurService) { }

  ngOnInit() {

    const utilisateurId: string|null = this.route.snapshot.paramMap.get('idUtilisateur');

    if(utilisateurId){
      
      this.utilisateurService.getUtilisateurById(+utilisateurId).subscribe(utilisateur => this.utilisateur = utilisateur);
    }
  }
  goToUtilisateurList(){
    this.router.navigate(['/utilisateurs']);
  }
  goToEditUtilisateur(utilisateur: Utilisateur){
    this.router.navigate(['/modif/utilisateur/',utilisateur.idUtilisateur]);
  }
  deleteUtilisateur(utilisateur: Utilisateur){4

   this.utilisateurService.deleteUtilisateurById(utilisateur.idUtilisateur).subscribe(() => this.goToUtilisateurList());
   //this.apprenantService.getApprenantById(apprenant.idUtilisateur).subscribe(() => this.goToUtilisateurList());

  }
}
