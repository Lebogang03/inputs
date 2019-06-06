import { Component, OnInit, Input } from '@angular/core';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() FirstName:string;
  @Input() LastName:string;
  @Input() Email:string;
  @Input() Id: any;

  constructor() { }

  ngOnInit() {
  }
 
}
