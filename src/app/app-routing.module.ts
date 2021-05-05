import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { LoginComponent } from './login-signup/login/login.component';
import { SignupComponent } from './login-signup/signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginSignupComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'customer',component:CustomerComponent},
  {path:'admin',component:AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
