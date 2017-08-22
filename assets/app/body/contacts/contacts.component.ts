import { Component, OnInit } from '@angular/core';
import { EmailService } from "./contact-form/email.service";

@Component({
    selector: 'app-contacts',
    templateUrl: 'contacts.component.html',
    styleUrls: ['./contacts.component.css'],
    providers: [EmailService]
    
})

export class ContactsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}