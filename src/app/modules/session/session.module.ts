import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { GestionSessionComponent } from './components/gestion-session/gestion-session.component';
import { ListSessionByFormationComponent } from './components/list-session-by-formation/list-session-by-formation.component';
import { FormsModule } from '@angular/forms';
import { NgbAccordion, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    GestionSessionComponent,
    ListSessionByFormationComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    FormsModule,
    NgbAccordionModule
  ]
})
export class SessionModule { }
