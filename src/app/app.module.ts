import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterContactFormComponent } from './footer/footer-contact-form/footer-contact-form.component';

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
    FooterContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
