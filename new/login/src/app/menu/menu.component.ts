import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  list = [{name:"login",path:"loginn"},
  {name:"about",path:"about"},
  {name:"contact",path:"contact"},{name:"form",path:"form"}];

 
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onNavigate(item){
    this.router.navigateByUrl(item.path);
  }
}
