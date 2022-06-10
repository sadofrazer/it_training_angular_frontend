import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormationRoutingModule } from './formation-routing.module';
import { ListFormationComponent } from './components/list-formation/list-formation.component';
import { HttpClientModule } from '@angular/common/http';
import { ListByThemeComponent } from './components/list-by-theme/list-by-theme.component';
import { DetailFormationComponent } from './components/detail-formation/detail-formation.component';
import { GestionFormationComponent } from './components/gestion-formation/gestion-formation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListFormationComponent,
    ListByThemeComponent,
    DetailFormationComponent,
    GestionFormationComponent
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ]
})
export class FormationModule { }
