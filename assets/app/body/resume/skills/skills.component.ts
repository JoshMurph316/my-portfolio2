import { Component, OnInit } from '@angular/core';

import { SkillsService } from './skills.service';

@Component({
    selector: 'app-skills',
    templateUrl: 'skills.component.html',
    styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
    skills = [];

    constructor(private skillsService: SkillsService) {}

    ngOnInit() {
        this.skills = this.skillsService.skills;
    }
}