import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { FeaturesComponent } from './features/features.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { TablepriceComponent } from './tableprice/tableprice.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    NavbarComponent,
    HerosectionComponent,
    FeaturesComponent,
    PlaylistComponent,
    Section3Component,
    Section4Component,
    TablepriceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
