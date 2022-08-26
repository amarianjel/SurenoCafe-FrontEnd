import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IDulce } from 'src/app/interfaces/dulce.interface';
import { ISalado } from 'src/app/interfaces/salado.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-modal-crud-edit',
  templateUrl: './modal-crud-edit.component.html',
  styleUrls: ['./modal-crud-edit.component.css']
})
export class ModalCrudEditComponent implements OnInit {
  formEdit: FormGroup=this.buildForm();

  constructor(public dialogRef: MatDialogRef<ModalCrudEditComponent>,
  @Inject(MAT_DIALOG_DATA) public data: IDulce, private router:Router,
  private formBuilder: FormBuilder, public productService: ProductService) { } 
  private buildForm(){
    return this.formEdit=this.formBuilder.group({
      tipo:[this.data.tipo,[Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      name:[this.data.name,[Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      cantidad:[this.data.cantidad,[Validators.required, Validators.minLength(4)]],
      price:[this.data.price,[Validators.required, Validators.minLength(4)]],
      description:[this.data.description,[Validators.required, Validators.minLength(5), Validators.maxLength(1000)]],
      imageUrl:[this.data.imageUrl,[Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      stock:[this.data.stock,[Validators.required]],
    });


  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarProducto(p:any){
    if(this.router.url == "/auth/dashboard/dulce"){
      let product:IDulce={
        prodId: this.data.prodId,
        tipo: p.value.tipo,
        name: p.value.name,
        cantidad: p.value.cantidad,
        price: p.value.price,
        description: p.value.description,
        imageUrl: p.value.imageUrl,
        stock: p.value.stock,
      };
      this.productService.actualizarDulce(product, this.data.prodId).subscribe((res:any[])=>{ //Acá iria el metodo para editar dulce
        console.log(res);
      });
    }
    if(this.router.url == "/auth/dashboard/salado"){
      let product:ISalado={
        prodId: this.data.prodId,
        tipo: p.value.tipo,
        name: p.value.name,
        cantidad: p.value.cantidad,
        price: p.value.price,
        description: p.value.description,
        imageUrl: p.value.imageUrl,
        stock: p.value.stock,
      };
      this.productService.actualizarSalado(product, this.data.prodId).subscribe((res:any[])=>{ //Acá iria el metodo para editar salado
        console.log(res);
      });
    }
    this.onNoClick();
    window.location.reload();
  }

}
