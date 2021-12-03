import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AboutService } from 'src/services/about.service';
import {Routes,RouterModule} from '@angular/router';

const routes:Routes=[

];
@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   

  ],
  providers: [
    AboutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
