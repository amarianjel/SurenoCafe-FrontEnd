import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  usuario:any;
  nombreUsuario:string;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
  }
  getUsuario(){
    let usuarioString=localStorage.getItem('usuario');
    if(usuarioString){
       this.usuario=JSON.parse(usuarioString);
       console.log(this.usuario);
       this.nombreUsuario=this.usuario.cliName.split(' ')[0];
    }
  }
  ngOnInit(): void {
    this.getUsuario();
  }
}
