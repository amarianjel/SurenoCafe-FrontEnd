import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { IAuth } from '../interfaces/auth.interface';


import { IDulce } from '../interfaces/dulce.interface';
import { ISalado } from '../interfaces/salado.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dulces$ = new Subject<IDulce[]>();
  index$ = new Subject<number>();

  constructor(private http:HttpClient) { }

  getAuth():Observable<IAuth[]>{
    return this.http.get<IAuth[]>("http://localhost:3000/auth").pipe(map((res:any)=> res));
  }
}
