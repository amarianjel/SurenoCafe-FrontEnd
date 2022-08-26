import { Component, OnInit, ViewChild } from '@angular/core';
import { IDulce } from 'src/app/interfaces/dulce.interface';
import { ProductService } from 'src/app/services/product.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ModalCrudAddComponent } from 'src/app/components/shared/modal/modal-crud-add/modal-crud-add.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoaded: boolean = false;
  menuItems: any[] = [];
  productosDulces: IDulce [] = [];
  displayedColumns: string[] = ['prodId', 'tipo', 'name', 'cantidad', 'price', 'description', 'imageUrl', 'edit'];


  // selection = new SelectionModel<IDulce>(true, []);
  dataSource: MatTableDataSource<IDulce>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private sidebarService: SidebarService, public productService: ProductService, public _MatPaginatorIntl: MatPaginatorIntl, public dialog: MatDialog) {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Items por página';
    
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
  openDialog() {
    this.dialog.open(ModalCrudAddComponent,{
      width: '600px',
      autoFocus: false
    });
  }
}
