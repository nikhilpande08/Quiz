import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
