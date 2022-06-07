import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Formation } from 'src/app/entities/Formation/formation';
import { Stheme } from 'src/app/entities/Formation/sous-theme';
import { FormationService } from '../../services/formation.service';
import { SthemeService } from '../../services/stheme.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-by-theme',
  templateUrl: './list-by-theme.component.html',
  styleUrls: ['./list-by-theme.component.scss']
})
export class ListByThemeComponent implements OnInit {
  private id : number;
  public sthemes$: Observable<Stheme[]>;
  public formation$ : Observable<Formation[]>;

  constructor(private formationService:FormationService, private sthemeService: SthemeService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const stringId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = stringId? parseInt(stringId):0;
    this.sthemes$=this.sthemeService.getSthemeByTheme(this.id);
    this.formation$=this.formationService.getFormByTheme(this.id);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  public listSthemeByTheme(): void{
    this.sthemes$=this.sthemeService.getSthemeByTheme(this.id);
    this.formation$=this.formationService.getFormByTheme(this.id);
    this.router.navigate([`/formation/lister/${this.id}`]);
  }

  public listFormByStheme(): Observable<Formation[]> {
    return this.formationService.getFormByStheme(this.id);
    
  }

}
