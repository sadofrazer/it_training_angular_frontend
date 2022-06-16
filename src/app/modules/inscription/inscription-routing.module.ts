import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInscriptionComponent } from './components/create-inscription/create-inscription.component';

const routes: Routes = [
  {path: 'create/session/:id', component: CreateInscriptionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionRoutingModule { }
