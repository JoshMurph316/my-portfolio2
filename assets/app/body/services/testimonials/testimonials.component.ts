import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testimonials',
    templateUrl: 'testimonials.component.html',
    styleUrls: ['./testimonials.component.css']
})

export class TestimonialsComponent implements OnInit {
    testimonials = [
        {
            owner: 'Ethel Arjona',
            company: "Ethel's Faces",
            img: '/images/ethel-face.jpg',
            imgAlt: 'testimonial image',
            testimonial: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, sint!"'
        },
        {
            owner: 'Paige Millershoen',
            company: "Paige Lorraine Artistry",
            img: '/images/about-light.jpg',
            imgAlt: 'testimonial image',
            testimonial: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, sint!"'
        }
    ]
    constructor() { }

    ngOnInit() { }

    onSlider(direction) {
        console.log(direction);
    }
}