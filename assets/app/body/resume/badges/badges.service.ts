import { Injectable } from "@angular/core";

@Injectable()
export class BadgesService {
    badges = [
        {
            name: 'HackerRank',
            description: 'popover text',
            src: '/images/badges/hackerRank-30.svg'
        },
        {
            name: 'Khan Academy',
            description: 'popover text',
            src: '/images/badges/khan-no-title.svg'
        },
        {
            name: 'CodeFights',
            description: 'popover text',
            src: '/images/badges/codefights.svg'
        }
    ]
}