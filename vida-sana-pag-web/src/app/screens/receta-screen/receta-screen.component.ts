import { Component, OnInit } from '@angular/core';
import recetasJson from '../../../assets/json/recetas.json';

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
  Recetas: RECETAS[] = recetasJson;
  constructor() { 
    console.log(this.Recetas);
  }

  ngOnInit(): void {
  }

}
