import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormationRoutingModule } from './formation-routing.module';
import { ListFormationComponent } from './components/list-formation/list-formation.component';
import { CreateUpdateFormationComponent } from './components/create-update-formation/create-update-formation.component';
import { HttpClientModule } from '@angular/common/http';
import { ListByThemeComponent } from './components/list-by-theme/list-by-theme.component';


@NgModule({
  declarations: [
    ListFormationComponent,
    CreateUpdateFormationComponent,
    ListByThemeComponent
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    HttpClientModule,
    NgbModule
  ]
})
export class FormationModule { }
