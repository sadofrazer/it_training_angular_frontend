import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/entities/Formation/formation';
import { Stheme } from 'src/app/entities/Formation/sous-theme';
import { FormationService } from '../../services/formation.service';
import { SthemeService } from '../../services/stheme.service';

@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.scss']
})
export class GestionFormationComponent implements OnInit {
  public formation : Formation;
  public formations$ : Observable<Formation[]>;
  public sthemes$: Observable<Stheme[]>;
  public stheme : Stheme;
  //public isInCreation: boolean = false;
  private id : number;
  public idStheme: number;
  public isCreation:boolean =true;
  public varOk:boolean=false;

  constructor(private sthemeService: SthemeService, private formationService:FormationService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const stringId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = stringId? parseInt(stringId):0;
    this.formations$=this.formationService.getAllFormations();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.sthemes$=this.sthemeService.getAllSthemes();
    
    this.formationService.getFormById(this.id>0? this.id : 1).subscribe((f:Formation)=>{
      this.formation=f;
      this.stheme=f.stheme;
      this.codeExist(f.codeFormation);
      console.log(this.isCreation);
    });
  }

  public changeId(e):void{
    this.codeExist(e.target.value);
  }

  public codeExist(code:string):void{
    let oneF : Formation = new Formation
      this.formationService.searchFormByWord(code).subscribe((f:Formation[]) =>{
        if(f.length>0){
          oneF=f[0];
        }else{
          oneF=null;
        }
        if(oneF){
          this.isCreation=false;
          this.varOk=true;
        }
        else{
          this.isCreation=true;
          this.varOk=true;
        }
      })
  }

  public selectChange(e){
    let value : string = e.target.value;
    console.table(e.target.value);
    console.log(value.split("-",1));
    this.sthemeService.getSthemeByCode(value.split("-",1)[0]).subscribe((s: Stheme)=>{
      this.stheme=s;
      this.formation.stheme=s;
    })
    
  }

  public addFormation() : void{
    if(this.isCreation){
      this.formation.idFormation=0;
      this.formationService.addFormation(this.formation);
      console.log("creation")
    }else{
      this.formationService.editFormation(this.formation);
    }
  }

}
