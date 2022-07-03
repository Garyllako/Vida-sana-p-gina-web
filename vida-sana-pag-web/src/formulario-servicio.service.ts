import { Injectable } from '@angular/core';
import { Contacto } from './app/contacto';

@Injectable({
  providedIn: 'root'
})
export class FormularioServicioService {  

  constructor() { }

  //envíar datos al backend
  EnviarDatos(Datos:Contacto){
    console.log(JSON.stringify(Datos));
  }

}
