import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionSessionComponent } from './components/gestion-session/gestion-session.component';

const routes: Routes = [
  {path: 'gestion', component: GestionSessionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
