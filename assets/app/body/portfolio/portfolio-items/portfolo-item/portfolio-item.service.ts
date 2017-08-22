import { Injectable } from '@angular/core';

import { PortfolioItem } from './portfolio-item'

@Injectable()
export class PortfolioItemService {

    items: PortfolioItem [] = [
        {
            id: 0, 
            type: 'site',
            name: 'Ethels Faces', 
            imgUrl: '/images/covers/ethel-small.JPG',
            link: 'http://www.ethelsfaces.com',
            date: '04-17',
            technologies: ['Node.js', 'JavaScript', 'CSS3', 'HTML5', 'Bootstrap'],
            description: 'This was my first real website. I eventually want to go back in a fix the many mistakes I made.'
        },
        {
            id: 1, 
            type: 'sketch',
            name: 'Star', 
            imgUrl: '/images/sketches/practice-star.svg',
            link: '#',
            date: '07-17',
            technologies: ['Adobe Illistrator'],
            description: 'This was an Illistrator course project.'
        },
        {
            id: 2, 
            type: 'project',
            name: 'City Search', 
            imgUrl: '/images/covers/city-search.JPG',
            link: 'https://josh-murphys-projects.herokuapp.com/projects/city-search',
            date: '08-17',
            technologies: ['JavaScript', 'CSS3', 'HTML5', 'Ajax'],
            description: 'Vanilla JS: Basic search api that returns US cities.'
        },
        {
            id: 3, 
            type: 'project',
            name: 'Css Variable', 
            imgUrl: '/images/covers/css-variables.JPG',
            link: 'https://josh-murphys-projects.herokuapp.com/projects/css-variables',
            date: '08-17',
            technologies: ['JavaScript', 'CSS3', 'HTML5'],
            description: 'Vanilla JS: Practice using Css variables.'
        },
        {
            id: 4, 
            type: 'site',
            name: 'Paige Lorraine Artisrty', 
            imgUrl: '/images/covers/paige-small.JPG',
            link: 'http://www.paigelorraineartistry.com',
            date: '08-17',
            technologies: ['Node.js', 'Angular', 'JavaScript', 'CSS3', 'HTML5', 'Bootstrap'],
            description: 'This was my second real site. I feel good about this one, though I know it need more functionality.'
        },
        {
            id: 5, 
            type: 'project',
            name: 'Drum Kit', 
            imgUrl: '/images/covers/drum-kit.JPG',
            link: 'https://josh-murphys-projects.herokuapp.com/projects/drum-kit',
            date: '07-17',
            technologies: ['JavaScript', 'CSS3', 'HTML5'],
            description: 'Vanilla JS: Practice with using sounds and key recognition.'
        },
        {
            id: 6, 
            type: 'project',
            name: 'Flex Panels', 
            imgUrl: '/images/covers/flex-panels.JPG',
            link: 'https://josh-murphys-projects.herokuapp.com/projects/flex-panels',
            date: '08-17',
            technologies: ['CSS3', 'JavaScript', 'HTML5', 'Flex Panels'],
            description: 'Vanilla JS: Practice with flex panels, with some added personality.'
        },
        {
            id: 7, 
            type: 'project',
            name: 'JS Clock', 
            imgUrl: '/images/covers/js-clock.JPG',
            link: 'https://josh-murphys-projects.herokuapp.com/projects/js-clock',
            date: '07-17',
            technologies: ['JavaScript', 'CSS3', 'HTML5'],
            description: 'Vanilla JS: a cool JavaScript clock.'
        },
    ];

    currentItem:PortfolioItem = this.items[0];
    currentItems = this.items;

    changeCurrentItem(clickedItem) {
        this.currentItem = clickedItem;
    }
    filterItems(sort) { // site, sketch, ...
        this.currentItems = this.items;
        if (sort !== 'all') {
            this.currentItems = this.currentItems.filter(item => item.type === sort);
        }
    } 
}
