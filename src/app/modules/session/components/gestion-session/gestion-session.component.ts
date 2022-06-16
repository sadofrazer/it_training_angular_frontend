import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/entities/Formation/formation';
import { Formateur } from 'src/app/entities/Utilisateur/Formateur';
import { FormationService } from 'src/app/modules/formation/services/formation.service';
import { AttribSalle } from 'src/app/modules/salle/entities/AttribSalle';
import { Salle } from 'src/app/modules/salle/entities/salle';
import { AttribSalleService } from 'src/app/modules/salle/services/attrib-salle.service';
import { SalleService } from 'src/app/modules/salle/services/salle.service';
import { Session } from '../../entities/Session';
import { SessionService } from '../../services/session.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import * as _ from 'lodash';

import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {map, startWith} from 'rxjs/operators';


export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-gestion-session',
  templateUrl: './gestion-session.component.html',
  styleUrls: ['./gestion-session.component.scss']
})


export class GestionSessionComponent implements OnInit {
  public session: Session;
  public sessions$ : Observable<Session[]>;
  public formations$: Observable<Formation[]>;
  public formateurs: Formateur[] = [];
  public salles : Salle[];
  public attribSalle: AttribSalle;

  private id : number;

  public isCreation:boolean =true;
  public varOk:boolean=false;

  public dateNow: Date;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  codeSalles: string[] = [];
  //allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('salleInput') salleInput: ElementRef<HTMLInputElement>;



  constructor(private formationService:FormationService, private sessionService: SessionService,
    private salleService:SalleService, private attribSalleService: AttribSalleService,
    private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    /*this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );*/

    this.attribSalle=new AttribSalle();
    this.dateNow = new Date();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const stringId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = stringId? parseInt(stringId):0;

    this.formations$=this.formationService.getAllFormations();
    this.sessions$ = this.sessionService.getAllSessions();

    this.salleService.getFreeSalles().subscribe((s:Salle[])=>{
      this.salles=s;
    });

    this.sessionService.getSessionById(this.id>0? this.id : 1).subscribe((s:Session)=>{
      this.session=s;
    });

  }


  public selectFormateurChange(e):void{

  }

  public selectFormationChange(e):void{
    let value : string = e.target.value;
    console.table(e.target.value);
    console.log(value.split("-",1));
    this.formationService.searchFormByWord(value.split("-",1)[0]).subscribe((fs: Formation[])=>{
      if (fs.length>0){
        this.session.formation=fs[0];
      }
    })
  }

  public selectSalleChange(e):void{
    let value : string = e.target.value;
    console.table(e.target.value);
    console.log(value.split("-",1));
    this.salleService.getSalleByCode(value.split("-",1)[0]).subscribe((s: Salle)=>{
      this.attribSalle.salle=s;
    })
  }

  public changeId(e):void{
    this.codeExist(e.target.value);
  }

  public codeExist(code:string):void{
    this.sessionService.CodeSessionExist(code).subscribe((b: Boolean)=>{
      if(b){
        this.isCreation=false;
        this.varOk=true;
      }else{
        this.isCreation=true;
        this.varOk=true;
      }
    })
      
  }

  public addUpdateSession() : void{
    
    if(this.isCreation){
      this.session.idSession=0;
      this.session.statut="NEW";
      this.sessionService.addSession(this.session).subscribe((s: Session)=>{
        this.session=s;
        this.router.navigate(['/session/gestion/'+this.session.idSession]).then(() => {
          window.location.reload();
        });
      });
      
    }else{
      if(this.id>0){
        console.log("execute update")
        this.sessionService.editSession(this.id, this.session).subscribe((s:Session)=>{
          this.session=s;
          this.router.navigate(['/Session/gestion/'+s.idSession]).then(() => {
            window.location.reload();
          });
        });
      }
    }
  }


  public deleteSession(id: number):void{
    this.sessionService.deleteSession(id).subscribe((b:boolean)=>{
      if(b){
        this.router.navigate(['/session/gestion/']).then(() => {
          window.location.reload();
        });
      }
    })
  }





  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our Salle
    if (value) {
        this.codeSalles.push(value)
        console.log(this.codeSalles);
    }
    console.log(this.codeSalles);
    // Clear the input value
    event.chipInput!.clear();
    this.fruitCtrl.setValue(null);
  }

  remove(salle: string): void {
    const index = this.codeSalles.indexOf(salle);

    if (index >= 0) {
      this.codeSalles.splice(index, 1);

      this.salleService.getSalleByCode(salle.split("-",1)[0]).subscribe((s: Salle)=>{
        if(this.salles.length>0){
          this.salles.push(s);
        }
      });
    }
    console.log(this.codeSalles);

    
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.codeSalles.push(event.option.viewValue);
    this.salleInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  /*private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }*/

}
