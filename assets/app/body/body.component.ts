import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../router.animations';

import { PortfolioItem } from './portfolio/portfolio-items/portfolo-item/portfolio-item';

@Component({
    selector: 'app-body',
    templateUrl: 'body.component.html',
    animations: [ routerTransition ],
    providers: [PortfolioItem]
})

export class BodyComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
}