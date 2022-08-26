import { Component, OnInit, ViewChild } from '@angular/core';
import { ISalado } from 'src/app/interfaces/salado.interface';
import { ProductService } from 'src/app/services/product.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ModalCrudAddComponent } from 'src/app/components/shared/modal/modal-crud-add/modal-crud-add.component';
import * as XLSX from 'xlsx';
import { ModalCrudDeleteComponent } from 'src/app/components/shared/modal/modal-crud-delete/modal-crud-delete.component';
import { ModalCrudEditComponent } from 'src/app/components/shared/modal/modal-crud-edit/modal-crud-edit.component';
@Component({
  selector: 'app-salado-crud',
  templateUrl: './salado-crud.component.html',
  styleUrls: ['./salado-crud.component.css']
})
export class SaladoCrudComponent implements OnInit {
  isLoaded: boolean = false;
  menuItems: any[] = [];
  productosSalados: ISalado [] = [];
  displayedColumns: string[] = ['prodId', 'tipo', 'name', 'cantidad', 'price', 'description', 'imageUrl', "stock", 'edit'];


  // selection = new SelectionModel<IDulce>(true, []);
  dataSource: MatTableDataSource<ISalado>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private sidebarService: SidebarService, public productService: ProductService, public _MatPaginatorIntl: MatPaginatorIntl, public dialog: MatDialog) {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Items por página';
    this._MatPaginatorIntl.nextPageLabel = 'Página siguiente';
    this._MatPaginatorIntl.previousPageLabel = 'Página anterior';
    
    // console.log(this.productosSalados);
    // console.log(this.menuItems);
   }

  ngOnInit(): void {
    this.showProducts();
  }
  ngAfterViewInit() {
  }

  showProducts(){
    this.productService.getSalados().subscribe( (res: any[]) => {
      this.productosSalados = res;
      this.dataSource = new MatTableDataSource(this.productosSalados);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialogAdd() {
    this.dialog.open(ModalCrudAddComponent,{
      width: '600px',
      autoFocus: false,
      data: "Salado"
    });
  }
  openDialogDelete(row: any) {
    let dialogRef = this.dialog.open(ModalCrudDeleteComponent,{
      width: '600px',
      autoFocus: false,
      data: row,
    });
  }
  openDialogEdit(row: any) {
    let dialogRef = this.dialog.open(ModalCrudEditComponent,{
      width: '600px',
      autoFocus: false,
      data: row,
    });
  }
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    delete (ws['O1']);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'ProductosSalados');
 
    /* save to file */  
    XLSX.writeFile(wb, "Salados.xlsx");
 
  }

}
