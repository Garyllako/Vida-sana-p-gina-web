import { Component, OnInit, ViewChild } from '@angular/core';
import recetasJson from '../../../assets/json/recetas.json';
import { RecetaService } from '../../services/receta.service';
import { Receta } from '../../models/receta.model';
import { NgForm } from '@angular/forms';

interface RECETAS {
  id: String;
  title: String;
  categoria: String;
  description: String;
  url: String;
}
@Component({
  selector: 'app-receta-screen',
  templateUrl: './receta-screen.component.html',
  styleUrls: ['./receta-screen.component.scss']
})
export class RecetaScreenComponent implements OnInit {
  ListaReceta = new Array<Receta>();
  @ViewChild('productsForm') form: NgForm | undefined;
  currentRecetaId!: string;

  constructor(private http: RecetaService) {

  }

  Services(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.http.getRecetas().subscribe(
      (data) => {
        this.ListaReceta = data;
      }
    )
  }
  

  onDelete(idreceta: string) {
    console.log(idreceta);
    this.http.eliminarReceta(idreceta).subscribe((result) => {
      console.warn("result", result)
    })
    console.log("listo?");
  }

  onEdit(idreceta: string){
    this.currentRecetaId = idreceta;
    let currentReceta = this.ListaReceta.find((p) => {return p._id === idreceta})
    console.log(currentReceta);

    this.form?.setValue({
      nombre: currentReceta?.nombre,
      categoria: currentReceta?.categoria,
      url: currentReceta?.url,
    });
  }

  onUpdate(recetas: {_id: string, nombre: string, categoria: string, url: string}){
    this.http.editarReceta(this.currentRecetaId, recetas);
  }

}