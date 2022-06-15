import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';


const routes: Routes = [
{ path: 'accueil', component: AccueilComponent },
{ path: 'connexion', component: ConnexionComponent},
{ path: 'formation',loadChildren:() => import('./modules/formation/formation.module').then(m => m.FormationModule) },
{ path: 'dashboard',loadChildren:() => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
{ path: '**', redirectTo: '/accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
