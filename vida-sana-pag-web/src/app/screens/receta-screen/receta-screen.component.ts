import { Component, OnInit } from '@angular/core';
import recetasJson from '../../../assets/json/recetas.json';
import { RecetaService } from '../../services/receta.service';
import { Receta } from '../../models/receta.model';

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
}