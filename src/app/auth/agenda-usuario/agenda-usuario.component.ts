import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPedidos } from 'src/app/interfaces/pedidos.interface';
import { LoginService } from 'src/app/services/login.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-agenda-usuario',
  templateUrl: './agenda-usuario.component.html',
  styleUrls: ['./agenda-usuario.component.css']
})
export class AgendaUsuarioComponent implements OnInit {

  displayedColumns: string[] = ["id_pedido", "email", "local", "fecha_agendada", "hora" , "name", "cantidad_producto", "imageUrl"];
  pedidos: IPedidos[] = [];
  pedidos2: IPedidos[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<IPedidos>;
  
  constructor(public ordersService: OrdersService, public loginService: LoginService) {
    this.obtenerPedidos();
   }

  ngOnInit(): void {
  }

  obtenerPedidos(){
    this.ordersService.getHistorialDulces().subscribe((res:any[])=>{
      this.pedidos=res;
      this.pedidos = this.pedidos.filter(t=>t.email== localStorage.getItem("email"));
      console.log(this.pedidos);
      
    })
    this.ordersService.getHistorialSalados().subscribe((res:any[])=>{
      this.pedidos2=res;
      this.pedidos2 = this.pedidos2.filter(t=>t.email== localStorage.getItem("email"));
      console.log(this.pedidos2);
      const array3 = this.pedidos.concat(this.pedidos2);
      this.dataSource = new MatTableDataSource(array3);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
      
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

}
