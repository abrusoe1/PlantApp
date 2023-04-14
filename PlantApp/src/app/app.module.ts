import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MyPlantsComponent } from './my-plants/my-plants.component';
import { PlantSearchComponent } from './plant-search/plant-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MyPlantsComponent,
    PlantSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
