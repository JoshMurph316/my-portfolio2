import { Component, OnInit } from '@angular/core';

import { ExperienceService } from './experience.service'

@Component({
    selector: 'app-experience',
    templateUrl: 'experience.component.html',
    styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {
    education = [];
    experience = [];

    constructor(private experienceService: ExperienceService) {}

    ngOnInit() {
        this.education = this.experienceService.education;
        this.experience = this.experienceService.experience;
    }
}