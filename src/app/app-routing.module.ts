import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';


const routes: Routes = [
{ path: 'accueil', component: AccueilComponent },
{path: 'formation',loadChildren:() => import('./modules/formation/formation.module').then(m => m.FormationModule) },
{path: 'session',loadChildren:() => import('./modules/session/session.module').then(m => m.SessionModule) },
{path: 'salle',loadChildren:() => import('./modules/salle/salle.module').then(m => m.SalleModule) },
{path: 'inscription',loadChildren:() => import('./modules/inscription/inscription.module').then(m => m.InscriptionModule) },
{ path: '**', redirectTo: '/accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
