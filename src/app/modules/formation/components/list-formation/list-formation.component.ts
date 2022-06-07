import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/entities/Formation/formation';
import { Stheme } from 'src/app/entities/Formation/sous-theme';
import { Theme } from 'src/app/entities/Formation/theme';
import { FormationService } from '../../services/formation.service';
import { SthemeService } from '../../services/stheme.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.scss']
})
export class ListFormationComponent implements OnInit {
  private id : number;
  public sthemes$: Observable<Stheme[]>;
  public formation$ : Observable<Formation[]>;
  public themes$ : Observable<Theme[]>;
  constructor(private themeService:ThemeService, private formationService:FormationService, private sthemeService: SthemeService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const stringId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = stringId? parseInt(stringId):0;
    this.themes$=this.themeService.getAllThemes();
    this.sthemes$=this.sthemeService.getAllSthemes();
    this.formation$=this.formationService.getAllFormations();
  }

}
