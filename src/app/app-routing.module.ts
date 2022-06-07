import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
const routes: Routes = [{ path: 'accueil', component: AccueilComponent },
{path: 'formation',loadChildren:() => import('./modules/formation/formation.module').then(m => m.FormationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
