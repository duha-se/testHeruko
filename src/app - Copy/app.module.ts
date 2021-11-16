import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import {MatDialogModule, MatDialogRef,MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    
    
  ],
  entryComponents: [
    PhoneBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule, MatDialogModule,
    FormsModule, BrowserAnimationsModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, MatDialogRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
