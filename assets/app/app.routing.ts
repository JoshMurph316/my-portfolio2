
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './body/home/home.component';
import { ResumeComponent } from './body/resume/resume.component';
import { ServicesComponent } from './body/services/services.component';
import { PortfolioComponent } from './body/portfolio/portfolio.component';
import { GuruBlogComponent } from './body/guru-blog/guru-blog.component';
import { ContactsComponent } from './body/contacts/contacts.component';
import { MoreAboutComponent } from './body/home/more-about/more-about.component';
import { PortfolioItemComponent } from "./body/portfolio/portfolio-items/portfolo-item/portfolio-item.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, data: {state: 'home'} },
    {path: 'more-about', component: MoreAboutComponent, data: {state: 'more-about'} },
    {path: 'resume', component: ResumeComponent, data: {state: 'resume'} },
    {path: 'services', component: ServicesComponent, data: {state: 'services'} },
    {path: 'portfolio', component: PortfolioComponent, data: {state: 'portfolio'} },
    {path: 'portfolio-item', component: PortfolioItemComponent, data: {state: 'portfolio-item'} },
    {path: 'guru-blog', component: GuruBlogComponent, data: {state: 'guru-blog'} },
    {path: 'contacts', component: ContactsComponent, data: {state: 'contacts'} },
]

export const routing = RouterModule.forRoot(APP_ROUTES);