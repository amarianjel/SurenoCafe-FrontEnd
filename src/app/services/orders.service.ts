import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPedidos } from '../interfaces/pedidos.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getUrl( query:string){
    const url = `http://localhost:3000/${query}`;

    return url;
  }

  getPedidos():Observable<IPedidos[]>{
    return this.http.get<IPedidos[]>(this.getUrl("pedido")).pipe(map((res:any)=> res));
  }
  crearPedido(pedido :IPedidos):Observable<IPedidos[]>{
    return this.http.post<IPedidos[]>(this.getUrl("pedido"), pedido).pipe(map((res:any)=> res));
  }
  eliminarPedido(id:number):Observable<IPedidos[]>{
    return this.http.delete<IPedidos[]>(this.getUrl(`pedido/${id}`)).pipe(map((res:any)=> res));
  }
  getHistorialDulces(){
    return this.http.get<IPedidos[]>(this.getUrl("pedido/historialDulces")).pipe(map((res:any)=> res));
  }
  getHistorialSalados(){
    return this.http.get<IPedidos[]>(this.getUrl("pedido/historialSalados")).pipe(map((res:any)=> res));
  }


}
