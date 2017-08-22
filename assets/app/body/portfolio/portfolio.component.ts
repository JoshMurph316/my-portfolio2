import { Component, OnInit } from '@angular/core';

import { PortfolioItemService } from "./portfolio-items/portfolo-item/portfolio-item.service";

@Component({
    selector: 'app-portfolio',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
    current = 'all';

    constructor(private portfolioItemService: PortfolioItemService) {}

    ngOnInit() { }

    onSort(clicked) {
        this.portfolioItemService.filterItems(clicked);
        this.current = clicked;
        console.log(this.current);
    }
}