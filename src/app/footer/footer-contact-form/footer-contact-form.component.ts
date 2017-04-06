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
constructor(private _contactService : ContactService) { }
    ngOnInit() { }
 
    public message: Email = {name: '', email: '', message: ''};
 
    onSubmit() {
      this._contactService.postEmail(this.message).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
    }
 
    handleResponse(response){
      // console.log(`msg is: {response.status}`);
 
      if(response.status =='success'){
        this.message = {name: '', email: '', message: ''};
        alert('Thank you for your message');
      }
 
      if(response.status =='error'){
        alert('Sorry, there seems to have been an errorof some kind.');
      }
    }
}

