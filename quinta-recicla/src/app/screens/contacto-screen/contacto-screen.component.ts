import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms'
declare var $: any;

@Component({
  selector: 'app-contacto-screen',
  templateUrl: './contacto-screen.component.html',
  styleUrls: ['./contacto-screen.component.scss']
})
export class ContactoScreenComponent implements OnInit {
 
  contactForm = new UntypedFormGroup({
    nombre: new UntypedFormControl('',Validators.required),
    email: new UntypedFormControl('',Validators.required),
    asunto: new UntypedFormControl(''),
    texto: new UntypedFormControl('',Validators.required),
  })

  get nombre(){return this.contactForm.get('nombre')}

  get email(){return this.contactForm.get('email')}

  get texto(){return this.contactForm.get('texto')}

  ngOnInit(): void {
  }

}
