
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./body/home/home.component";
import { ResumeComponent } from "./body/resume/resume.component";
import { ServicesComponent } from "./body/services/services.component";
import { PortfolioComponent } from "./body/portfolio/portfolio.component";
import { GuruBlogComponent } from "./body/guru-blog/guru-blog.component";
import { ContactsComponent } from "./body/contacts/contacts.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'guru-blog', component: GuruBlogComponent},
    {path: 'contacts', component: ContactsComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);