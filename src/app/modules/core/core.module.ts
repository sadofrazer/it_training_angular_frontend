import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreRoutingModule } from './core-routing.module';
import { ItemsListComponent } from './components/items-list/items-list.component';


@NgModule({
  declarations: [
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgbModule
  ],
  exports: [
    ItemsListComponent
  ]
})
export class CoreModule { }
