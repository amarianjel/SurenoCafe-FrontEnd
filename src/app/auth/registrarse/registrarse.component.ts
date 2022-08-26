import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {
  formRegistro: FormGroup=this.buildForm();
  correctamente: boolean=false;
  yaexiste:boolean=false;

  constructor(private http:HttpClient, private formBuilder:FormBuilder) { 
  }

  private buildForm(){
    return this.formRegistro=this.formBuilder.group({
      name:['',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      phone:['',[Validators.required, Validators.min(99999999), Validators.max(1000000000)]],
      email:['',[Validators.required, Validators.email]],
      validandoEmail:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      validandoPassword:['',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    });


  }


  nameError(){
    if(this.formRegistro.get('name')!.hasError('minlength')&& this.formRegistro.get('name')!.dirty){
      return true;
    }else{
      return false;
    }
  }

  phoneError(){
    if(this.formRegistro.get('phone')!.hasError('min')||this.formRegistro.get('phone')!.hasError('max')&& this.formRegistro.get('phone')!.dirty) {  
      return true;
    }else{
      return false;
    }
  }

  emailError(){
    if(this.formRegistro.get('email')!.hasError('email') && this.formRegistro.get('email')!.dirty){
      return true;
    }else{
       return false;
     
    }
  }

  validaEmail(){
    if(this.formRegistro.get('email')?.value===this.formRegistro.get('validandoEmail')?.value){
      return true;
    }else{
      return false;
    }
  }

  validaPassword(){
    if(this.formRegistro.get('password')!.value===this.formRegistro.get('validandoPassword')!.value){
      return true;
    }else{
      return false;
    }
  }

  validaPasswordVacio(){
    if(this.formRegistro.get('validandoPassword')!.value===''){
      return true;
    }else{
      return false;
    }
  }

  validaEmailVacio(){
    if(this.formRegistro.get('validandoEmail')?.value==''){
      return true;
    }else{
      return false;
    }
  }



  passwordError(){
    if(this.formRegistro.get('password')!.hasError('minlength') && this.formRegistro.get('password')!.dirty){
      return true;
    }else{
      return false;
    }
  }
  ngOnInit(): void {
  }

  registro(f:any){
   let registroCliente={
    name: f.value.name,
    phone: f.value.phone,
    email: f.value.email,
    password: f.value.password 
   };
  
   interface Respuesta{
    ok:boolean;
    mensaje:string;
   }


    
   this.http.post<Respuesta>('http://localhost:3000/cliente/',registroCliente).subscribe(
      (res)=>{
        if(res.ok){
          this.correctamente=true;
          
        }else{
          this.yaexiste=true;
         
        }
      }
    );
   
  }
}
