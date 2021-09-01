import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { ExploreDestinationComponent } from './explore-destination/explore-destination.component';
import { FeaturedHlidayHomesComponent } from './featured-hliday-homes/featured-hliday-homes.component';
import { WhyChoseVistaComponent } from './why-chose-vista/why-chose-vista.component';
import { LuxaryComponent } from './luxary/luxary.component';
import { LuxaryVillasComponent } from './luxary-villas/luxary-villas.component';
import { GreatMindsComponent } from './great-minds/great-minds.component';
import { HomeComponent } from './home/home.component';
import { ChosenTrustedComponent } from './chosen-trusted/chosen-trusted.component';
import { NewMediaComponent } from './new-media/new-media.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  declarations: [
    AppComponent,
    ExploreDestinationComponent,
    FeaturedHlidayHomesComponent,
    WhyChoseVistaComponent,
    LuxaryComponent,
    LuxaryVillasComponent,
    GreatMindsComponent,
    HomeComponent,
    ChosenTrustedComponent,
    NewMediaComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    IvyCarouselModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
