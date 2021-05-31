import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StadiumViewComponent } from './components/stadium-view/stadium-view.component';
import { PanoramaViewComponent } from './components/panorama-view/panorama-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StadiumViewComponent,
    PanoramaViewComponent
  ],
  imports: [
    FormsModule,      
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
