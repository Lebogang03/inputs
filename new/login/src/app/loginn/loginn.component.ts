import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.scss']
})
export class LoginnComponent implements OnInit {
 
  constructor(private router:Router) { 

 
  }

onLoginn(item){
  this.router.navigateByUrl("loginn")
}

  ngOnInit() {
  }

}
