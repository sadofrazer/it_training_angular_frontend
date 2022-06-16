import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'inspector';
import { Inscription } from 'src/app/entities/Inscription/Inscription';
import { FormationService } from 'src/app/modules/formation/services/formation.service';
import { AttribSalleService } from 'src/app/modules/salle/services/attrib-salle.service';
import { SalleService } from 'src/app/modules/salle/services/salle.service';
import { SessionService } from 'src/app/modules/session/services/session.service';
import { InscriptionModule } from '../../inscription.module';

@Component({
  selector: 'app-create-inscription',
  templateUrl: './create-inscription.component.html',
  styleUrls: ['./create-inscription.component.scss']
})
export class CreateInscriptionComponent implements OnInit {

  constructor(private formationService:FormationService, private sessionService: SessionService,
    private salleService:SalleService, private attribSalleService: AttribSalleService,
    private activatedRoute: ActivatedRoute,private router: Router) { }

  public session: Session;
  public incription: Inscription;
  ngOnInit(): void {
  }

}
