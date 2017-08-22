import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

import { PortfolioItem } from "./portfolo-item/portfolio-item";
import { PortfolioItemService } from './portfolo-item/portfolio-item.service';

@Component({
    selector: 'app-portfolio-items',
    templateUrl: 'portfolio-items.component.html',
    styleUrls: ['./portfolio-items.component.css'],
})

export class PortfolioItemsComponent implements OnInit {
    items: PortfolioItem[] = [];

    constructor(private portfolioItemService: PortfolioItemService) { }

    ngOnInit() {
        this.items = this.portfolioItemService.currentItems;
    }
    ngDoCheck() {
        this.items = this.portfolioItemService.currentItems;
    }

    onItemClick(item: PortfolioItem) {
        let newItem = this.portfolioItemService.changeCurrentItem(item);
    }
}