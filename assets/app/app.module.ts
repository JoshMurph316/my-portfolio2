import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './app.routing';

import { AppComponent } from "./app.component";

import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

import { BodyComponent } from "./body/body.component";
import { ContactsComponent } from "./body/contacts/contacts.component";
import { ServicesComponent } from "./body/services/services.component";
import { ResumeComponent } from "./body/resume/resume.component";
import { PortfolioComponent } from "./body/portfolio/portfolio.component";
import { HomeComponent } from "./body/home/home.component";
import { GuruBlogComponent } from "./body/guru-blog/guru-blog.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        BodyComponent,
        ContactsComponent,
        GuruBlogComponent,
        HomeComponent,
        PortfolioComponent,
        ResumeComponent,
        ServicesComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}