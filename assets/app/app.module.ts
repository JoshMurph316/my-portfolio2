import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";

import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}