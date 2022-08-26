import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { ICliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public timeout: any;
  userData:ICliente;
  // public logueado: boolean = false;
  // private loginStatus = new BehaviorSubject<boolean>(this.loggedIn());
  constructor( private http: HttpClient, private router: Router ) {
    // console.log(window.localStorage.getItem('token'));
    // console.log(window.localStorage.getItem('usuario'));
    // console.log(window.localStorage.getItem('logueado'));
    
  }

  public login( email: string, password:string ){
    let userLogin = { email: email, password: password };
    return this.http.post( 'http://localhost:3000/cliente/login', userLogin ).pipe(map(( res: any ) => {
      console.log("Aqui no paso.........");
      localStorage.setItem( 'token', res.token );
      localStorage.setItem( 'usuario', JSON.stringify(res.Cliente[0]));
      localStorage.setItem( 'logueado', '1');
      localStorage.setItem( "rol", res.Cliente[0].rol);
      localStorage.setItem( 'email', res.Cliente[0].cliEmail);
      localStorage.setItem( 'nombre', res.Cliente[0].cliName);
      localStorage.setItem( 'telefono', res.Cliente[0].cliTelefono);

      this.userData = res.Cliente[0];
      console.log(res.Cliente[0].rol);
      console.log(this.userData.cliEmail);

      if(!this.isAdmin()){
        this.router.navigate([ '/home' ]);
      }else{
        this.router.navigate([ 'auth/dashboard' ]);
      }
      // this.loginStatus.next(true);
      // localStorage.setItem('loginStatus', '1');
      // this.logueado = true;
      return res;
    }));
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('logueado');
    localStorage.removeItem('rol');
    localStorage.removeItem('email');
    localStorage.removeItem( 'nombre');
    localStorage.removeItem( 'telefono');
    
    localStorage.setItem('logueado' , '0');
    // this.logueado = false;
    this.router.navigate([ 'home' ]);
    this.userData={cliName:'',cliEmail:'',cliPassword:'',cliImg:'',cliTelefono:'',cliToken:'', rol:''};
  }

  public loggedIn(): boolean {
    var loginCookie = localStorage.getItem('logueado');
    if(loginCookie == "1"){
      // if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
      //   return false;
      // }
      return true;

    }
    return false;
    // return localStorage.getItem('token') !== null;
  }
  public isAdmin():boolean {
    var adminCookie = localStorage.getItem('rol')
      if(adminCookie == "admin"){
        return true;
      }
      return false;
  }
}
