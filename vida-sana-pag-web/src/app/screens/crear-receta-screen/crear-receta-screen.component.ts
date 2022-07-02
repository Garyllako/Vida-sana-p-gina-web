import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Receta } from '../../models/receta.model';
import { RecetaService } from '../../services/receta.service';


@Component({
  selector: 'app-crear-receta-screen',
  templateUrl: './crear-receta-screen.component.html',
  styleUrls: ['./crear-receta-screen.component.scss']
})
export class CrearRecetaScreenComponent implements OnInit {
  recetaForm: FormGroup;
  titulo = 'Crear receta';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _recetaService: RecetaService,
    private aRouter: ActivatedRoute) { 
    this.recetaForm = this.fb.group({
    producto: ['', Validators.required],
    categoria: ['', Validators.required],
    ubicacion: ['', Validators.required],
    precio: ['', Validators.required],
  })
this.id = this.aRouter.snapshot.paramMap.get('id');
}

  ngOnInit(): void {
  }

  agregarReceta() {

    const RECETA: Receta = {
      nombre: this.recetaForm.get('producto')?.value,
      categoria: this.recetaForm.get('categoria')?.value,
      url: this.recetaForm.get('url')?.value,
    }

    console.log(RECETA);
    this._recetaService.guardarReceta(RECETA).subscribe(data => {
      this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.recetaForm.reset();
    })

  
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar receta';
      this._recetaService.obtenerReceta(this.id).subscribe(data => {
        this.recetaForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
        })
      })
    }
  }

}


