import { Injectable } from "@angular/core";

@Injectable()
export class ExperienceService {
    experience = [
        {
            name: 'Freelance Web Developer',
            date: 'Dec 16 - current',
            where: 'Remote',
            description: 'As a freelance developer I create web applications for small businesses. I enjoy the constant challenge of freelance work.'
        },
        {
            name: 'Client Reporting Analyst',
            date: 'Jan 17 - Jul 17',
            where: 'National Field Network',
            description: 'As a client reporter I processed CSV files and created Excel reports for our clients. My team and I also quieried databases in MS Access for specific information.'
        },
        {
            name: 'Combat Engineer',
            date: 'Mar 11 - Jul 14',
            where: 'United States Army',
            description: 'As a combat engineer I learned the complex calculations used for handling explosives. The Army helped me value teamwork over idividual achievement.'
        }
    ]
    education = [
        {
            name: 'Computer Science',
            date: 'June 15',
            where: 'Brookdale Community College',
            description: 'Computer Science has given me a better understanding of what development really is. Growing my knowledge of algorithms and programming beyond the web.',
            certification: '#'
        },
        {
            name: 'The Web Developer Bootcamp',
            date: 'Jan 17',
            where: 'Colt Steele',
            description: 'This bootcamp covered web development from start to deployment in a node.js application.',
            certification: 'https://www.udemy.com/certificate/UC-URSJL5AZ/'
        },
        {
            name: 'Angular (Angular 2 or 4) & NodeJS - The MEAN Stack Guide',
            date: 'Apr 17',
            where: 'Maxilian Schwarzuller',
            description: 'This course focused on the relationship shared by elements in a MEAN stack application.',
            certification: 'https://www.udemy.com/certificate/UC-OGXVVMC0/'
        }
    ]
}