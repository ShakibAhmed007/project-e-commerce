import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormControlName } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    organizationName:new FormControl(''),
    fullName: new FormControl(''),
    email: new FormControl(''),
    countryCode: new FormControl('1'),
    phoneNumber: new FormControl(''),
    jobType: new FormControl('1'),
    password: new FormControl(''),
    repeatPassword: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
