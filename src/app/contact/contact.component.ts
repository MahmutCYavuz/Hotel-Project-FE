import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

export class ContactModel{
  name:string;
  surname:string;
  phoneNumber:string;
  email:string;
  context:string;
  
  constructor() {
    this.name = '';
    this.surname = '';
    this.phoneNumber = '';
    this.email = '';
    this.context = '';
  }

}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name:string="";
  surname:string="";
  phoneNumber:string="";
  email:string="";
  context:string="";
  
  contactModel1 : ContactModel;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
    this.contactModel1 = new ContactModel();
  }

  onSubmit() {
    this.contactModel1.name = this.name;
    this.contactModel1.surname = this.surname;
    this.contactModel1.phoneNumber = this.phoneNumber;
    this.contactModel1.context = this.context;
    this.userService.sendContact(this.contactModel1).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    //this.router.navigate(['/users']);
    console.log("gönderi başarılı")
  }
  
}

