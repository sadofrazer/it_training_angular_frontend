import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { CreateInscriptionComponent } from './components/create-inscription/create-inscription.component';


@NgModule({
  declarations: [

  
    CreateInscriptionComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule
  ]
})
export class InscriptionModule { }
