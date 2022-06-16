import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Inscription } from 'src/app/entities/Inscription/Inscription';
import { InscriptionService } from '../../services/inscription.service';

@Component({
  selector: 'app-list-by-apprenant',
  templateUrl: './list-by-apprenant.component.html',
  styleUrls: ['./list-by-apprenant.component.scss']
})

export class ListByApprenantComponent implements OnInit {

  public inscription:Inscription;
  public inscriptions$ : Observable<Inscription[]>
  public varOk:boolean=false;
  private id : number;

  constructor(private inscriptionService:InscriptionService,
    private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.inscription=new Inscription;

    const stringId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = stringId? parseInt(stringId):0;


    this.inscriptionService.getInscriptionById(this.id? this.id:1).subscribe((i: Inscription)=>{
      this.inscription=i;
      this.inscriptions$ = this.inscriptionService.getAllInscriptions();
      this.varOk=true;
    })
    
  }

}
