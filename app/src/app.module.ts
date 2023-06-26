import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import dayGridPlugin from '@fullcalendar/daygrid'; 

import interactionPlugin from '@fullcalendar/interaction'; 
// FullCalendarModule.registerPlugins([ 
//   dayGridPlugin,
//   interactionPlugin
// ]);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
