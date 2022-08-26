import { Component, OnInit, ViewChild } from '@angular/core';
import { IDulce } from 'src/app/interfaces/dulce.interface';
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
  selector: 'app-dulce-crud',
  templateUrl: './dulce-crud.component.html',
  styleUrls: ['./dulce-crud.component.css']
})
export class DulceCrudComponent implements OnInit {
  isLoaded: boolean = false;
  menuItems: any[] = [];
  productosDulces: IDulce [] = [];
  displayedColumns: string[] = ['prodId', 'tipo', 'name', 'cantidad', 'price', 'description', 'imageUrl', "stock", 'edit'];


  // selection = new SelectionModel<IDulce>(true, []);
  dataSource: MatTableDataSource<IDulce>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private sidebarService: SidebarService, public productService: ProductService, public _MatPaginatorIntl: MatPaginatorIntl, public dialog: MatDialog) {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Items por página';
    this._MatPaginatorIntl.nextPageLabel = 'Página siguiente';
    this._MatPaginatorIntl.previousPageLabel = 'Página anterior';
    
    console.log(this.productosDulces);
    // console.log(this.menuItems);
   }

  ngOnInit(): void {
    this.showProducts();
  }
  ngAfterViewInit() {
  }

  showProducts(){
    this.productService.getDulces().subscribe( (res: any[]) => {
      this.productosDulces = res;
      this.dataSource = new MatTableDataSource(this.productosDulces);
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
    let dialogRef = this.dialog.open(ModalCrudAddComponent,{
      width: '600px',
      autoFocus: false,
      data: "Dulce"
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
    XLSX.utils.book_append_sheet(wb, ws, 'ProductosDulces');
 
    /* save to file */  
    XLSX.writeFile(wb, "Dulces.xlsx");
 
  }

}
