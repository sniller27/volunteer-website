import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';

//httpclient module for making requests
import { DataService } from '../data.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  volunteerSubmit: Object = {};

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onSubmit(userForm: NgForm) {
    // console.log(userForm.value);
    // console.log('Name:' + userForm.controls['firstname'].value);
    // console.log('Name:' + userForm.controls['lastname'].value);
    // console.log('Form Valid:' + userForm.valid);
    // console.log('Form Submitted:' + userForm.submitted);
    console.log(this.data.sendPost());

    //1. addHero({ name } as Hero)
    //2. subscribe

    console.log('hello');
  }

}
