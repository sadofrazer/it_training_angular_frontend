import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListUtilisateurComponent } from './modules/utilisateur/list-utilisateur/list-utilisateur.component';


const routes: Routes = [
{ path: 'accueil', component: AccueilComponent },
{ path: 'utilisateurs', component: ListUtilisateurComponent},
{path: 'formation',loadChildren:() => import('./modules/formation/formation.module').then(m => m.FormationModule) },
{ path: '**', redirectTo: '/accueil', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
