import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {routes} from './app.router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BottomFooterComponent} from './bottom-footer/bottom-footer.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ServicesComponent} from './services/services.component';
import {ContactComponent} from './contact/contact.component';
import {FooterContactFormComponent} from './footer/footer-contact-form/footer-contact-form.component';
import {ErrorComponent} from './error/error.component';
import {BoxfitCircuitComponent} from './services/boxfit-circuit/boxfit-circuit.component';
import {PersonalTrainingComponent} from './services/personal-training/personal-training.component';
import { OnlineTrainingComponent } from './services/online-training/online-training.component';
import { OfficeWellbeingComponent } from './services/office-wellbeing/office-wellbeing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottomFooterComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    ServicesComponent,
    ContactComponent,
    FooterContactFormComponent,
    ErrorComponent,
    BoxfitCircuitComponent,
    PersonalTrainingComponent,
    OnlineTrainingComponent,
    OfficeWellbeingComponent,
    TestimonialsComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    NgbModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
