import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { IDulce } from '../interfaces/dulce.interface';
import { ISalado } from '../interfaces/salado.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Variables observables para el uso global de las cosas
  dulces$ = new Subject<IDulce[]>();
  index$ = new Subject<number>();

  salados$ = new Subject<ISalado[]>();

  constructor(private http: HttpClient) { }

  getDulces():Observable<IDulce[]>{
    return this.http.get<IDulce[]>("http://localhost:3000/dulces").pipe(map((res:any)=> res));
  }
  
  getSalados():Observable<ISalado[]>{
    return this.http.get<ISalado[]>("http://localhost:3000/salados").pipe(map((res:any) => res));
  }
}
