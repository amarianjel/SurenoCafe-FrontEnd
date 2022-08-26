import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor( private loginService: LoginService, private formBuilder: FormBuilder, public sideBarService: SidebarService ) {
    
    this.formLogin = this.formBuilder.group({
      email: [ '', [ Validators.required, Validators.email ]],
      password: [ '', [ Validators.required, Validators.minLength(2) ]]
    });
  }
  toggleDrawer() {
    this.sideBarService.toggle();
  }
  login(){
    console.log(this.formLogin.value.email);
    console.log(this.formLogin.value.password);
    this.loginService.login( this.formLogin.value.email, this.formLogin.value.password ).subscribe(( res: any[] ) => {
      console.log(res);
      this.toggleDrawer();
      // err => console.log(err)
    });
  }


}
