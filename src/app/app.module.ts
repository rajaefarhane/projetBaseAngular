import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AboutService } from 'src/services/about.service';
import {Routes,RouterModule} from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';

const routes:Routes=[

];
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   

  ],
  providers: [
    AboutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
