import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StatesComponent } from './components/states/states.component';
import { LoaderSpinnerComponent } from './components/loaders/spinner/spinner.component';
import { LoaderDotsComponent } from './components/loaders/dots/dots.component';
import { ErrorMessageComponent } from './components/errors/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    LoaderSpinnerComponent,
    LoaderDotsComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
