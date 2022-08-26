import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { IDulce } from '../interfaces/dulce.interface';
import { ISalado } from '../interfaces/salado.interface';
import { IProductoSalado } from '../interfaces/productoSalado.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Variables observables para el uso global de las cosas
  dulces$ = new Subject<IDulce[]>();
  index$ = new Subject<number>();

  salados$ = new Subject<ISalado[]>();
  

  constructor(private http: HttpClient) { }

  //metodo para ingresar 1 vez la URL y simplemente pasarle la ruta
  getUrl( query:string){
    const url = `http://localhost:3000/${query}`;

    return url;
  }

  // DULCES

  getDulces():Observable<IDulce[]>{
    return this.http.get<IDulce[]>(this.getUrl("dulces")).pipe(map((res:any)=> res));
  }

  crearDulce(dulce :IDulce):Observable<IDulce[]>{
    return this.http.post<IDulce[]>(this.getUrl("dulces"), dulce).pipe(map((res:any)=> res));
  }

  actualizarDulce(dulce :IDulce, id:number):Observable<IDulce[]>{
    return this.http.put<IDulce[]>(this.getUrl(`dulces/${id}`), dulce).pipe(map((res:any)=> res));
  }

  eliminarDulce(id:number):Observable<IDulce[]>{
    return this.http.delete<IDulce[]>(this.getUrl(`dulces/${id}`)).pipe(map((res:any)=> res));
  }


  getDulcesMasVendidos():Observable<any>{
    return this.http.get<any>(this.getUrl("dulces/masVendidos")).pipe(map((res:any)=> res));
  }
  actualizarStockProductoDulce(stock :number, id:number){
    let data = { stock: stock};
    this.http.put<any>(this.getUrl(`dulces/${id}`), data).subscribe((res)=>{
        console.log("Stock cambiado con exito");
        console.log(res);
    });
  }
  crearContieneDulces(detalle:any){
    return this.http.post<any>(this.getUrl("dulces/contieneDulce/"), detalle).pipe(map((res:any)=>res));
  }
  
  
  // SALADOS

  getSalados():Observable<ISalado[]>{
    return this.http.get<ISalado[]>(this.getUrl("salados")).pipe(map((res:any) => res));
  }
  crearSalado(salado :ISalado):Observable<ISalado[]>{
    return this.http.post<ISalado[]>(this.getUrl("salados"), salado).pipe(map((res:any)=> res));
  }

  actualizarSalado(salado :ISalado, id:number):Observable<ISalado[]>{
    return this.http.put<ISalado[]>(this.getUrl(`salados/${id}`), salado).pipe(map((res:any)=> res));
  }

  eliminarSalado(id:number):Observable<ISalado[]>{
    return this.http.delete<ISalado[]>(this.getUrl(`salados/${id}`)).pipe(map((res:any)=> res));
  }

  getSaladosMasVendidos():Observable<any>{
    return this.http.get<any>(this.getUrl("salados/masVendidos")).pipe(map((res:any)=> res));
  }
  actualizarStockProductoSalado(stock:number, id:number){
    let data = { stock: stock};
    this.http.put<any>(this.getUrl(`salados/${id}`), data).subscribe((res)=>{
        console.log("Stock cambiado con exito");
        console.log(res);
    });
  }
  crearContieneSalados(detalle:any){
    return this.http.post<any>(this.getUrl("salados/contieneSalado/"), detalle).pipe(map((res:any)=>res));
  }


  

}
