import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  FirstName="lebo";
  LastName="mokwa";
  Email="lllll";
  Id: 12;
  constructor(private router:Router) { }
onLogin()
{
 this.router.navigateByUrl("login")

}
  ngOnInit() {
  }

}
