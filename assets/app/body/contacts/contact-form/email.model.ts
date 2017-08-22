export class Email {
    name: string;
    email: string;
    message: string;
    radio: string

    constructor(name: string, email: string, message: string, radio: string) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.radio = radio;
    }
}