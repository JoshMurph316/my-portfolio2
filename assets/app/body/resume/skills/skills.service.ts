import { Injectable } from "@angular/core";

@Injectable()
export class SkillsService {
    skills = [
        {
            name: 'Front End',
            subSkills: ['HTML5',' CSS3', ' JavaScript'],
            per: '75%'
        },
        {
            name: 'Back End',
            subSkills: ['Node.js', ' Express', ' MongoDB'],
            per: '45%'
        },
        {
            name: 'Workflow',
            subSkills: ['Git', ' Heroku', ' Webpack'],
            per: '65%'
        }
    ];
    
}