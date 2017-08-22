import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services',
    templateUrl: 'services.component.html',
    styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
    services = [
        {
            name: 'Website Creation',
            img: '/images/badges/hackerRank-30.svg',
            imgAlt: '## badge',
            description: 'Start to finish web site creation.'
        },
        {
            name: 'Unlimited Upgrades',
            img: '/images/badges/hackerRank-30.svg',
            imgAlt: '## badge',
            description: 'Add all the features you want.'
        },
        {
            name: 'Managment and Support',
            img: '/images/badges/hackerRank-30.svg',
            imgAlt: '## badge',
            description: 'Continuous optimizing and updating for the web.'
        },
        {
            name: 'Custom Icons',
            img: '/images/badges/hackerRank-30.svg',
            imgAlt: '## badge',
            description: 'Create custom site icons for a 100% unique wesite.'
        }
    ]
    constructor() { }

    ngOnInit() { }
}