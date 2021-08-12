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

@NgModule({
  declarations: [
    AppComponent,
    ExploreDestinationComponent,
    FeaturedHlidayHomesComponent,
    WhyChoseVistaComponent,
    LuxaryComponent,
    LuxaryVillasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
