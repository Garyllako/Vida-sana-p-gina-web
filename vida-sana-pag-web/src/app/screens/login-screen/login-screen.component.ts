import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioServicioService } from '../../../formulario-servicio.service' ;

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  activarMsg:boolean=false;

  formulario:FormGroup | any;
  constructor(public FormB:FormBuilder, public Servicio:FormularioServicioService){
    this.formulario=this.FormB.group({
      email: ["", Validators.required],
      contraseña: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  validacion(){
    //console.log(this.formulario.value);
    this.activarMsg=true;

    this.Servicio.EnviarDatos({"email":this.formulario.get("email")?.value,"contraseña":this.formulario.get("contraseña")?.value});
  }

}
