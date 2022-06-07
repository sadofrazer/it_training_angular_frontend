import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateFormationComponent } from './components/create-update-formation/create-update-formation.component';
import { ListByThemeComponent } from './components/list-by-theme/list-by-theme.component';
import { ListFormationComponent } from './components/list-formation/list-formation.component';

const routes: Routes = [ 
{path: 'lister/:id', component: ListByThemeComponent},
{path: 'creer', component: CreateUpdateFormationComponent},
{path: '**', component: ListFormationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
