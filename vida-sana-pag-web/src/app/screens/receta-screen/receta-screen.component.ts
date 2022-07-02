import { Component, OnInit } from '@angular/core';
import recetasJson from '../../../assets/json/recetas.json';
import { RecetaService } from '../../services/receta.service';
import { Receta } from '../../models/receta.model';
interface RECETAS {
  id: Number;
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
  ListaReceta = new Array <Receta>();
  constructor(private http:RecetaService) { 
    
  }

  ngOnInit(): void {
    this.http.getRecetas().subscribe(
      (data) => {
        this.ListaReceta = data;
      }
    )
  }
  
}







