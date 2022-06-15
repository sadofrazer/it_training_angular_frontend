import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeUser } from '../typeuser';
import { Apprenant } from '../Apprenant';
import { ApprenantService } from '../apprenant.service';
import { Formateur } from '../Formateur';
import { FormateurService } from '../formateur.service';
import { Responsable } from '../Responsable';
import { ResponsableService } from '../responsable.service';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
   
  styles: [
  ]
})
export class UtilisateurFormComponent implements OnInit {
  @Input() utilisateur: Utilisateur;
  @Input() apprenant: Apprenant;
  @Input() formateur: Formateur;
  @Input() responsable: Responsable;
  affectation: TypeUser[];
  public af :TypeUser;
  isAddForm: boolean;

  constructor(private utilisateurService: UtilisateurService,
    private apprenantService: ApprenantService,
    private responsableService: ResponsableService,
     private formateurService: FormateurService, 
     private router: Router ) {}

  ngOnInit() {
    //this.utilisateur.idUtilisateur = 0;
    this.af = new TypeUser();
   // this.utilisateur = new Utilisateur();
    this.apprenant = new Apprenant() ;
    this.formateur = new Formateur();
    this.responsable = new Responsable();;
   
   this.formateurService.getUtilisateurTypeList().subscribe((t:TypeUser[])=>{
     this.affectation = t;
     console.log(this.affectation);
   });
    this.isAddForm = this.router.url.includes('ajout');
  }
 


  onSubmit(){
    //met à jour le type de l'utilisateur avec l'objet type recu du ngmodel de notre select
    if(this.af){
      this.utilisateur.typeuser=this.af;
    }

    if(this.isAddForm && this.af.nom === 'Formateur'){
      console.log(this.af);
      console.log(this.utilisateur);
      let form = <Formateur>this.utilisateur;
      form.certifications=this.formateur.certifications;
      this.formateurService.addFormateur(form).subscribe((formateur: Formateur) => this.router.navigate(['/utilisateurs']));

    }
    else if(this.isAddForm && this.af.nom === 'Apprenant'){
       
      let app = <Apprenant>this.utilisateur;
      app.dernierDiplome=this.apprenant.dernierDiplome;

      this.apprenantService.addApprenant(app).subscribe((apprenant: Apprenant) => this.router.navigate(['/utilisateurs']));

    }
    else if(this.isAddForm && this.af.nom === 'Administrateur'){
      console.log('admin')
      let admin = <Responsable>this.utilisateur;
      admin.fonction=this.responsable.fonction;
      console.log(admin);
      this.responsableService.addResponsable(admin).subscribe((resp: Responsable) => this.router.navigate(['/utilisateurs']));

    }
   
    else {

      this.utilisateurService.updateUtilisateur(this.utilisateur).subscribe(() => this.router.navigate(['/utilisateur', this.utilisateur.idUtilisateur]));

    }
    {


    // this.utilisateurService.updateUtilisateur(this.utilisateur).subscribe(() => this.router.navigate(['/utilisateur', this.utilisateur.idUtilisateur]));

    }
  
   //this.router.navigate(['/Utilisateur', this.Utilisateur.id]);
  //}
  }}
