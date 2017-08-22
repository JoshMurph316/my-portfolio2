import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { EmailService } from "./email.service";

@Component({
    selector: 'app-contact-form',
    templateUrl: 'contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
    radio = 'project';
    name: String;
    email: String;
    message: String;

    constructor(private EmailService: EmailService, private router: Router) {}   

    ngOnInit() { }

    onRadio(radioInfo) {
        this.radio = radioInfo;
    }
    onEmailSubmit() {
        const email = {
            name: this.name,
            email: this.email,
            message: this.message,
            radio: this.radio
        }
        this.EmailService.registerEmail(email).subscribe(data => {
            if(data.success){
                console.log("bingo");
                this.router.navigate(['/home']);
            } else {
                this.router.navigate(['/home']);
                console.log("dingo");
            }
        });
        this.router.navigate(['/home']);
    } 
}