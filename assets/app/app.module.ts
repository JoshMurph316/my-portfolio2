import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { routing } from './app.routing';

import { SkillsService } from './body/resume/skills/skills.service';
import { ExperienceService } from "./body/resume/experience/experience.service";
import { BadgesService } from "./body/resume/badges/badges.service";

import { AppComponent } from "./app.component";

import { NavbarComponent } from "./navbar/navbar.component";

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
import { TestimonialsComponent } from "./body/services/testimonials/testimonials.component";
import { PricingComponent } from "./body/services/pricing/pricing.component";
import { PortfolioItemsComponent } from "./body/portfolio/portfolio-items/portfolio-items.component";
import { PortfolioItemService } from "./body/portfolio/portfolio-items/portfolo-item/portfolio-item.service";
import { ContactInfoComponent } from "./body/contacts/contact-info/contact-info.component";
import { ContactFormComponent } from "./body/contacts/contact-form/contact-form.component";
import { MoreAboutComponent } from "./body/home/more-about/more-about.component";
import { PortfolioItemComponent } from "./body/portfolio/portfolio-items/portfolo-item/portfolio-item.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        BodyComponent,
        ContactsComponent,
        ContactFormComponent,
        ContactInfoComponent,
        GuruBlogComponent,
        HomeComponent,
        AboutComponent,
        MoreAboutComponent,
        PortfolioComponent,
        PortfolioItemsComponent,
        PortfolioItemComponent,
        ResumeComponent,
        BadgesComponent,
        ExperienceComponent,
        SkillsComponent,
        ServicesComponent,
        PricingComponent,
        TestimonialsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        routing,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [
        SkillsService,
        ExperienceService,
        BadgesService,
        PortfolioItemService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}