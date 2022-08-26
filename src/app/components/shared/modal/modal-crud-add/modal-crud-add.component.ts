import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDulce } from 'src/app/interfaces/dulce.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-modal-crud-add',
  templateUrl: './modal-crud-add.component.html',
  styleUrls: ['./modal-crud-add.component.css']
})
export class ModalCrudAddComponent implements OnInit {

  formAdd: FormGroup=this.buildForm();
  constructor(public dialogRef: MatDialogRef<ModalCrudAddComponent>,
  @Inject(MAT_DIALOG_DATA) public data: string, private formBuilder: FormBuilder, public productService: ProductService) { }


  private buildForm(){
    return this.formAdd=this.formBuilder.group({
      tipo:["",[Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      name:["",[Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      cantidad:["",[Validators.required, Validators.minLength(4)]],
      price:["",[Validators.required, Validators.min(1000), Validators.max(999999)]],
      description:["",[Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      imageUrl:["",[Validators.required, Validators.minLength(5), Validators.maxLength(1000)]],
      stock:["",[Validators.required]],
    });
  }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  //Validadores
  tipoError(){
    if(this.formAdd.get('tipo')!.hasError('minlength')&& this.formAdd.get('tipo')!.dirty){
      return true;
    }else{
      return false;
    }
  }
  nameError(){
    if(this.formAdd.get('name')!.hasError('minlength')&& this.formAdd.get('name')!.dirty) {  
      return true;
    }else{
      return false;
    }
  }

  cantidadError(){
    if(this.formAdd.get('cantidad')!.hasError('minlength')&& this.formAdd.get('cantidad')!.dirty) {  
      return true;
    }else{
      return false;
    }
  }

  priceError(){
    if(this.formAdd.get('price')!.hasError('min')&& this.formAdd.get('price')!.dirty) {  
      return true;
    }else{
      return false;
    }
  }
  descriptionError(){
    if(this.formAdd.get('description')!.hasError('minlength')&& this.formAdd.get('description')!.dirty) {  
      return true;
    }else{
      return false;
    }
  }
  imageUrlError(){
    if(this.formAdd.get('imageUrl')!.hasError('minlength')&& this.formAdd.get('imageUrl')!.dirty) {  
      return true;
    }else{
      return false;
    }
  }
  stockError(){
    if(this.formAdd.get('stock')!.hasError('required')&& this.formAdd.get('stock')!.touched) {  
      return true;
    }else{
      return false;
    }
  }

  crearProducto(p:any){
    if(this.data=="Dulce"){
      let product:any={
        tipo: p.value.tipo,
        name: p.value.name,
        cantidad: p.value.cantidad,
        price: p.value.price,
        description: p.value.description,
        imageUrl: p.value.imageUrl,
        stock: p.value.stock,
      };
      this.productService.crearDulce(product).subscribe((res:any)=>{
        // alert("Dulce creado correctamente");
        alert(res.Mensaje);
      })
    }
    if(this.data=="Salado"){
      let product:any={
        tipo: p.value.tipo,
        name: p.value.name,
        cantidad: p.value.cantidad,
        price: p.value.price,
        description: p.value.description,
        imageUrl: p.value.imageUrl,
        stock: p.value.stock,
      };
      this.productService.crearSalado(product).subscribe((res:any)=>{
        console.log(res);
        alert(res.Mensaje);
      })
    }
    this.onNoClick();
    window.location.reload();
  }

}
