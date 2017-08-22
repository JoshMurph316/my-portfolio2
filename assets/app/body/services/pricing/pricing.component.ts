import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pricing',
    templateUrl: 'pricing.component.html',
    styleUrls: ['./pricing.component.css']
})

export class PricingComponent implements OnInit {
    plans = [
        {
            name: 'Basic',
            price: '$00',
            priceInfo: '*min',
            frequency: 'one-time',
            description: 'This plan is best for single project builds',
            includes: ['Website Construction', 'Logo Design', 'Video Edit'],
            img: '/images/army-shot.jpg',
            imgAlt: 'plan image'
        },
        {
            name: 'Essentials',
            price: '$00',
            priceInfo: '**min',
            frequency: 'Monthly',
            description: 'This plan is best for single project builds',
            includes: ['Post Support', 'Maintnence', 'Additional Features'],
            img: '/images/army-shot.jpg',
            imgAlt: 'plan image'
        },
        {
            name: 'Pro',
            price: '$00',
            priceInfo: '**min',
            frequency: 'Monthly',
            description: 'This plan is best for single project builds',
            includes: ['Post Support', 'Maintnence', 'Additional Features'],
            img: '/images/army-shot.jpg',
            imgAlt: 'plan image'
        }
    ]
    constructor() { }

    ngOnInit() { }
}