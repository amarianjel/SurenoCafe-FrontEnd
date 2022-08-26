import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IDulce } from 'src/app/interfaces/dulce.interface';
import { ProductService } from 'src/app/services/product.service';
Router
@Component({
  selector: 'app-modal-crud-delete',
  templateUrl: './modal-crud-delete.component.html',
  styleUrls: ['./modal-crud-delete.component.css']
})
export class ModalCrudDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalCrudDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDulce, private router:Router, public productService: ProductService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  borrarProducto(){
    if(this.router.url == "/auth/dashboard/dulce"){ //Acá iria el metodo para borrar dulce
      this.productService.eliminarDulce(this.data.prodId).subscribe((res:any)=>{
        console.log(res);
      });
    }
    if(this.router.url == "/auth/dashboard/salado"){ //Acá iria el metodo para borrar salado
      this.productService.eliminarSalado(this.data.prodId).subscribe((res:any)=>{
        console.log(res);
      });  
    }
    this.onNoClick();
    window.location.reload();
    
  }

}
