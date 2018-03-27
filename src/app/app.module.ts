import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NumberHistoryComponent } from './number-history/number-history.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    NumberHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
