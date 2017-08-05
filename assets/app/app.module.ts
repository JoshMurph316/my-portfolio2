import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './app.routing';

import { SkillsService } from './body/resume/skills/skills.service';
import { ExperienceService } from "./body/resume/experience/experience.service";

import { AppComponent } from "./app.component";

import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

import { BodyComponent } from "./body/body.component";
import { ContactsComponent } from "./body/contacts/contacts.component";
import { ServicesComponent } from "./body/services/services.component";
import { ResumeComponent } from "./body/resume/resume.component";
import { PortfolioComponent } from "./body/portfolio/portfolio.component";
import { AboutComponent } from "./body/home/about/about.component";
import { GuruBlogComponent } from "./body/guru-blog/guru-blog.component";
import { HomeComponent } from "./body/home/home.component";
import { ExperienceComponent } from "./body/resume/experience/experience.component";
import { SkillsComponent } from "./body/resume/skills/skills.component";
import { BadgesComponent } from "./body/resume/badges/badges.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        BodyComponent,
        ContactsComponent,
        GuruBlogComponent,
        HomeComponent,
        AboutComponent,
        PortfolioComponent,
        ResumeComponent,
        BadgesComponent,
        ExperienceComponent,
        SkillsComponent,
        ServicesComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [
        SkillsService,
        ExperienceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}