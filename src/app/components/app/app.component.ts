import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/entities/Formation/theme';
import { ThemeService } from 'src/app/modules/formation/services/theme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_FrontEnd';
  public isMenuCollapsed = true;
  public $themes : Observable<Theme[]>;
  public word:string=null;
  constructor( private themeService: ThemeService , private activatedRoute: ActivatedRoute,private router: Router, private searchService:SearchService) { }

  ngOnInit(): void {
    this.$themes=this.themeService.getAllThemes();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  public getSearchWord():void{
    let x= Math.floor(Math.random() * 100);
    this.searchService.word=this.word;
    this.router.navigate([`/formation/catalogue/search?word${x}=`+this.word]);
  }
}
