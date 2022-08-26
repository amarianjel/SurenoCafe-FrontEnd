import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.component.html',
  styleUrls: ['./editar-cuenta.component.css']
})
export class EditarCuentaComponent implements OnInit {

  formRegistro: FormGroup = this.buildForm();
  correctamente: boolean = false;
  yaexiste: boolean = false;
  _isDisabled: boolean = true;
  usuario:any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, public loginService: LoginService, public router: Router) { 
    this.isDisabled();
  }

  private buildForm() {
    return this.formRegistro = this.formBuilder.group({
      name: [localStorage.getItem("nombre"), [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      phone: [localStorage.getItem("telefono"), [Validators.required, Validators.min(99999999), Validators.max(1000000000)]],
      email: [localStorage.getItem("email")],// ,[Validators.required, Validators.email]
      password: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      validandoPassword: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    });
  }

  getUrl( query:string){
    const url = `http://localhost:3000/${query}`;

    return url;
  }

  getUsuario(){
    let usuarioString=localStorage.getItem('usuario');
    if(usuarioString){
       this.usuario=JSON.parse(usuarioString);
      //  console.log(this.usuario);
    }
  }


  nameError() {
    if (this.formRegistro.get('name')!.hasError('minlength') && this.formRegistro.get('name')!.dirty) {
      return true;
    } else {
      return false;
    }
  }

  phoneError() {
    if (this.formRegistro.get('phone')!.hasError('min') || this.formRegistro.get('phone')!.hasError('max') && this.formRegistro.get('phone')!.dirty) {
      return true;
    } else {
      return false;
    }
  }

  emailError() {
    if (this.formRegistro.get('email')!.hasError('email') && this.formRegistro.get('email')!.dirty) {
      return true;
    } else {
      return false;

    }
  }

  logout(){
    this.loginService.logout();
  }

  validaEmail() {
    if (this.formRegistro.get('email')?.value === this.formRegistro.get('validandoEmail')?.value) {
      return true;
    } else {
      return false;
    }
  }

  validaPassword() {
    if (this.formRegistro.get('password')!.value === this.formRegistro.get('validandoPassword')!.value) {
      return true;
    } else {
      return false;
    }
  }

  validaPasswordVacio() {
    if (this.formRegistro.get('validandoPassword')!.value === '') {
      return true;
    } else {
      return false;
    }
  }

  validaEmailVacio() {
    if (this.formRegistro.get('validandoEmail')?.value == '') {
      return true;
    } else {
      return false;
    }
  }



  passwordError() {
    if (this.formRegistro.get('password')!.hasError('minlength') && this.formRegistro.get('password')!.dirty) {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit(): void {
    this.getUsuario();
  }

  actualizar(f: any) {
    let actualizaUsuario = {
      name: f.value.name,
      phone: f.value.phone,
      email: f.value.email,
      password: f.value.password
    };

    interface Respuesta {
      ok: boolean;
      mensaje: string;
    }

    this.http.put<Respuesta>(`http://localhost:3000/cliente/${f.value.email}`, actualizaUsuario).subscribe(
      (res) => {
        if (res.ok) {
          this.correctamente = true;
          alert("Datos modificados correctamente. Debes volver a iniciar sesión para continuar");
          this.loginService.logout();


        } else {
           console.log("se murió");

        }
      }
    );

  }
  isDisabled() {
    if (this._isDisabled) {
      this.formRegistro.controls['name'].disable();
      this.formRegistro.controls['phone'].disable();
      this.formRegistro.controls['password'].disable();
      this.formRegistro.controls['validandoPassword'].disable();
    } if (!this._isDisabled) {
      this.formRegistro.controls['name'].enable();
      this.formRegistro.controls['phone'].enable();
      this.formRegistro.controls['password'].enable();
      this.formRegistro.controls['validandoPassword'].enable();
    }
    this._isDisabled = !this._isDisabled;
  }

}
