import { Injectable } from "@angular/core";

@Injectable()
export class ExperienceService {
    experience = [
        {
            name: 'Freelance Web Developer',
            date: 'Dec 16 - current',
            where: 'Remote',
            description: 'Being a freelance developer means creating anything a client may need from a simple site to full web applications. I like freelance work because of the constant challenge.'
        },
        {
            name: 'Natinoal Field Network',
            date: 'Jan 17 - Jul 17',
            where: 'NJ',
            description: 'Being a freelance developer means creating anything a client may need from a simple site to full web applications. I like freelance work because of the constant challenge.'
        },
        {
            name: 'Combat Engineer',
            date: 'Mar 11 - Jul 14',
            where: 'TX',
            description: 'Being a freelance developer means creating anything a client may need from a simple site to full web applications. I like freelance work because of the constant challenge.'
        }
    ]
    education = [
        {
            name: 'Brookdale Community College',
            date: 'June 15',
            where: 'NJ',
            description: 'some short description, Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            certification: '#'
        },
        {
            name: 'The Web Developer Bootcamp',
            date: 'Jan 17',
            where: 'Udemy',
            description: 'some short description, Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            certification: 'https://www.udemy.com/certificate/UC-URSJL5AZ/'
        },
        {
            name: 'Angular (Angular 2 or 4) & NodeJS - The MEAN Stack Guide',
            date: 'Apr 17',
            where: 'Udemy',
            description: 'some short description, Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            certification: 'https://www.udemy.com/certificate/UC-OGXVVMC0/'
        }
    ]
}