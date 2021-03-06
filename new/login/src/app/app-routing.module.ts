import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginnComponent } from './loginn/loginn.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [

{path:"",component:MenuComponent, 
children:[{path:"loginn",component:LoginnComponent},{path:"about",component:AboutComponent},

          {path:"contact",component:ContactComponent},  {path:"form",component:FormComponent}]}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
