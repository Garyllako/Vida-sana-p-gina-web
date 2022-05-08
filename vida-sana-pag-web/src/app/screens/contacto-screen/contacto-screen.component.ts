import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contacto-screen',
  templateUrl: './contacto-screen.component.html',
  styleUrls: ['./contacto-screen.component.scss']
})
export class ContactoScreenComponent implements OnInit {

  
  constructor() { 
    let formulario:any= document.getElementById("formulario");
    if(formulario){
        formulario?.addEventListener("submit", function(e:any){
          e.preventDefault();
          let nombre:any = document.getElementById('nombre');
          if(nombre ==='hola'){
            alert('hola');
          }
          console.log(nombre.value);
          let email:any = document.getElementById('email');
          console.log(email.value);
          let mensaje:any = document.getElementById('mensaje');
          console.log(mensaje.value);
          console.log("Formulario enviado");
      });
    }
  }

  

  ngOnInit(): void {
  }

}
