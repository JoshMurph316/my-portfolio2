import { Component, OnInit } from '@angular/core';

import { BadgesService } from './badges.service';

@Component({
    selector: 'app-badges',
    templateUrl: 'badges.component.html',
    styleUrls: ['./badges.component.css']
})

export class BadgesComponent implements OnInit {
    badges = [];
    
    constructor(private badgesService: BadgesService) {}

    ngOnInit() { 
        this.badges = this.badgesService.badges;
    }
}