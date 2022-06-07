import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/entities/Formation/theme';
import { ThemeService } from 'src/app/modules/formation/services/theme.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_FrontEnd';
  public isMenuCollapsed = true;
  public $themes : Observable<Theme[]>;
  constructor( private themeService: ThemeService , private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.$themes=this.themeService.getAllThemes();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
