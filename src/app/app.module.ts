import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AppComponent } from './components/app/app.component';
import { CoreModule } from './modules/core/core.module';
import { FormationModule } from './modules/formation/formation.module';
import { FormationService } from './modules/formation/services/formation.service';
import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    FormationModule,
    DashboardModule,
    FormsModule
  ],
  exports: [
    AccueilComponent
  ],
  
  providers: [FormationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
