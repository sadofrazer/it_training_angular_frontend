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
<<<<<<< HEAD
=======
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SessionModule } from './modules/session/session.module';
>>>>>>> f8b191561c416011ad17cb920179474b5eec0a92
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    AccueilComponent
  ],
  
  providers: [FormationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
