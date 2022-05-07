import { Component, OnInit } from '@angular/core';
import { Galeria } from 'src/app/models/galeria.model';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  public invitados: Galeria[] = [];

  constructor() { 
    this.invitados = [
      { nombre: 'imagen 1', Categoria: ["Comida"], enlace: "https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg", },
      { nombre: 'imagen 2', Categoria: ["Comida"], enlace: "https://bootstrapious.com/i/snippets/sn-gallery/img-4.jpg", },
      { nombre: 'imagen 3', Categoria: ["Comida"], enlace: "https://bootstrapious.com/i/snippets/sn-gallery/img-6.jpg", },
      { nombre: 'imagen 4', Categoria: ["Comida"], enlace: "https://bootstrapious.com/i/snippets/sn-gallery/img-8.jpg", },
      { nombre: 'imagen 5', Categoria: ["Comida"], enlace: "https://images.pexels.com/photos/1120575/pexels-photo-1120575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", },
      { nombre: 'imagen 6', Categoria: ["comida"], enlace: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" },
    ];
  }
  
  ngOnInit(): void {
  }

}
