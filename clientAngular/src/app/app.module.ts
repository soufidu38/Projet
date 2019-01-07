import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretaryComponent } from './secretary/secretary.component';

import {HttpClientModule} from '@angular/common/http';
import { PatientComponent } from './patients/patient/patient.component';
import { InfirmierComponent } from './infirmier/infirmier.component';
import { AjoutPatientComponent } from './ajout-patient/ajout-patient.component';
import { AttribuerPatientComponent } from './attribuer-patient/attribuer-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretaryComponent,
    PatientComponent,
    InfirmierComponent,
    AjoutPatientComponent,
    AttribuerPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
enableProdMode();
