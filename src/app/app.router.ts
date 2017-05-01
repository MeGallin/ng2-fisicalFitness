import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesComponent } from './services/services.component';
import { PersonalTrainingComponent } from './services/personal-training/personal-training.component';
import { BoxfitCircuitComponent } from './services/boxfit-circuit/boxfit-circuit.component';
import { OnlineTrainingComponent } from './services/online-training/online-training.component';
import { OfficeWellbeingComponent } from './services/office-wellbeing/office-wellbeing.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';


export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'services/personal-training', component: PersonalTrainingComponent},
  {path: 'services/boxfit-circuit-training', component: BoxfitCircuitComponent},
  {path: 'services/online-training', component: OnlineTrainingComponent},
  {path: 'services/office-wellbeing', component: OfficeWellbeingComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: ErrorComponent}
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
