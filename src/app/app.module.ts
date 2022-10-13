import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {ClipboardModule} from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { ShorterComponent } from './shorter/shorter.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    HomeComponent,
    ShorterComponent,
    StatisticsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
