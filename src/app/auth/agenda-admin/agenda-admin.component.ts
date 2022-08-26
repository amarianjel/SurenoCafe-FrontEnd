import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPedidos } from 'src/app/interfaces/pedidos.interface';
import { OrdersService } from 'src/app/services/orders.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-agenda-admin',
  templateUrl: './agenda-admin.component.html',
  styleUrls: ['./agenda-admin.component.css']
})
export class AgendaAdminComponent implements OnInit {

  storeName = "";
  displayedColumns: string[] = ["id_pedido", "email", "local", "fecha_agendada", "hora" , "name", "cantidad_producto", "imageUrl"];
  pedidos: IPedidos[] = [];
  pedidos2: IPedidos[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<IPedidos>;

  constructor(public pedidosService: OrdersService) {
    this.obtenerPedidos();

  }

  ngOnInit(): void {
  }

  changeStore(id: number) {
    switch (id) {
      case 1:
        this.storeName = "5 de Abril";
        break;
      case 2:
        this.storeName = "Constitución";
        break;
      case 3:
        this.storeName = "Flores de Millán";
        break;
    }
  }

  obtenerPedidos() {
    this.pedidosService.getHistorialDulces().subscribe((res:any[])=>{
      this.pedidos=res;
      // console.log(this.pedidos);
      
    })
    this.pedidosService.getHistorialSalados().subscribe((res:any[])=>{
      this.pedidos2=res;
      // console.log(this.pedidos2);
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
    this.storeName=""

  }
  applyFilterVariable(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.storeName = filterValue;
  }

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    delete (ws['O1']);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'PedidosAgendados');

    /* save to file */
    XLSX.writeFile(wb, "Agenda.xlsx");

  }

}
