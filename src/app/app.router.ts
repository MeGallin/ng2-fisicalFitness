import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const router: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutMeComponent},
{path: 'services', component: ServicesComponent},
{path: 'contact', component: ContactComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);