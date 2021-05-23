import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiToolbarModule } from '@pga/ui-toolbar';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, UiToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
