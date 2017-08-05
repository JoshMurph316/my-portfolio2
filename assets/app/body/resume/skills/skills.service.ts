import { Injectable } from "@angular/core";

@Injectable()
export class SkillsService {
    skills = [
        {
            name: 'Front-End',
            subSkills: ['HTML5/CSS3/JavaScript', 'Angular4', 'Bootstrap4']
        },
        {
            name: 'Back-End',
            subSkills: ['Node.js', 'Express', 'MongoDB']
        },
        {
            name: 'Workflow',
            subSkills: ['Git/GitHub', 'npm', 'webpack2']
        },
        {
            name: 'Dev-Ops',
            subSkills: ['Kubernetes', 'Docker', 'AWS']
        }
    ];
    
}