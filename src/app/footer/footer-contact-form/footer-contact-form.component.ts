import { Component } from '@angular/core';

@Component({
  selector: 'fs-footer-contact-form',
  templateUrl: './footer-contact-form.component.html',
  styleUrls: ['./footer-contact-form.component.css']
})
export class FooterContactFormComponent {

onSubmit(value: any){
console.log(value);
}
}
