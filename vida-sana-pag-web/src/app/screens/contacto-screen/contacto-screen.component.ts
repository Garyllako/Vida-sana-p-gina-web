import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
declare var $: any;

@Component({
  selector: 'app-contacto-screen',
  templateUrl: './contacto-screen.component.html',
  styleUrls: ['./contacto-screen.component.scss']
})
export class ContactoScreenComponent implements OnInit {
 
  contactForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    asunto: new FormControl(''),
    texto: new FormControl('',Validators.required),
  })

  get nombre(){return this.contactForm.get('nombre')}

  get email(){return this.contactForm.get('email')}

  get texto(){return this.contactForm.get('texto')}

  ngOnInit(): void {
  }

}
