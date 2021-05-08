import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CoreDataModule, CoreDataRoutes } from '@pga/core-data';
import { CoreStateModule, coreStateRoutes } from '@pga/core-state';
import { MaterialModule, materialRoutes } from '@pga/material';
import { RoutingModule } from './routing.module';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  declarations: [AppComponent, WidgetsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
