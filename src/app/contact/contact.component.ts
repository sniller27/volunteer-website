import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';

//httpclient module for making requests
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }


  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    console.log('Name:' + userForm.controls['firstname'].value);
    console.log('Name:' + userForm.controls['lastname'].value);
    console.log('Form Valid:' + userForm.valid);
    console.log('Form Submitted:' + userForm.submitted);

    console.log('hello');
  }

}
