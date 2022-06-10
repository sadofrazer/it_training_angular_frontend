import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormationComponent } from './components/detail-formation/detail-formation.component';
import { GestionFormationComponent } from './components/gestion-formation/gestion-formation.component';
import { ListByThemeComponent } from './components/list-by-theme/list-by-theme.component';
import { ListFormationComponent } from './components/list-formation/list-formation.component';

const routes: Routes = [ 
{path: 'lister/:id', component: ListByThemeComponent},
{path: 'details/:id', component: DetailFormationComponent},
{path: 'gestion/:id', component: GestionFormationComponent},
{path: 'gestion', component: GestionFormationComponent},
{path: '**', component: ListFormationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
