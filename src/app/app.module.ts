import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { userinfoformcomponent } from './userinfoform/userinfoform.component';
import {FormsModule} from "@angular/forms";
import { EmailtestComponent } from './emailtest/emailtest.component';

@NgModule({
  declarations: [
    AppComponent,

    userinfoformcomponent,
     EmailtestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
