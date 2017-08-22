import { Component, OnInit } from '@angular/core';

import { PortfolioItem } from "./portfolio-item";
import { PortfolioItemService } from "./portfolio-item.service";

@Component({
    selector: 'app-portfolio-item',
    templateUrl: 'portfolio-item.component.html',
    styleUrls:['./portfolio-item.component.css']
})

export class PortfolioItemComponent implements OnInit {
    currentItem: PortfolioItem;

    constructor(private portfolioItemService: PortfolioItemService) {}

    ngOnInit() {
        this.currentItem = this.portfolioItemService.currentItem;
    }
}