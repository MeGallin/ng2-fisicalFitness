import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../ng-services/contact.service';
import { Email } from '../../interfaces/email';

@Component({
  selector: 'fs-footer-contact-form',
  templateUrl: './footer-contact-form.component.html',
  styleUrls: ['./footer-contact-form.component.css'],
  providers: [ContactService]
})
export class FooterContactFormComponent {
  constructor(private _contactService: ContactService) { }
  ngOnInit() { }

  public message: Email = { name: '', email: '', messages: '' };
  public clearMessage;

  onSubmit() {
    this._contactService.postEmail(this.message).subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
    );

  }
  submitButton() {
    setInterval(() => {
      this.clearMessage = 'Thank you for you enquiry...I will be in contact with you very shortly. Regards Zach.';
    }, 1200)

  }

  handleResponse(response) {
    // console.log(`msg is: {response.status}`);

    if (response.status == 'success') {
      this.message = { name: '', email: '', messages: '' };
      alert('Thank you for your message');
    }

    if (response.status == 'error') {
      alert('Sorry, there seems to have been an error of some kind.');
    }
  }
}

