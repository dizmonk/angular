import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {Client} from './client';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private email: string;
  private phone: string;
  private name: string;
  private gallons: string;
  private date: string;
  private location: string;


  model = new Client(this.name, this.email, this.phone, this.gallons,
    this.date, this.location);

  submitted = false;

  onSubmit() {this.submitted = true; }

  get diagnostic() {return JSON.stringify(this.model);}
  ngOnInit() {
  }

}
