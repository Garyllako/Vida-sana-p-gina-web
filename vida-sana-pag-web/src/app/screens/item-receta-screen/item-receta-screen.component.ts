import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../services/receta.service';
import { Receta } from '../../models/receta.model';


@Component({
  selector: 'app-item-receta-screen',
  templateUrl: './item-receta-screen.component.html',
  styleUrls: ['./item-receta-screen.component.scss']
})
export class ItemRecetaScreenComponent implements OnInit {
  ListaReceta = new Array <Receta>();
  constructor(private http:RecetaService ) { }

  ngOnInit(): void {
    this.http.getRecetas().subscribe(
      (data) => {
        this.ListaReceta = data;
      }
    )
  }
}
