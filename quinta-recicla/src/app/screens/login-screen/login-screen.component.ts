import { Component, OnInit } from '@angular/core';
import { FormularioServicioService } from '../../../formulario-servicio.service' ;
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  captcha: string;
  correo: string;
  activarMsg:boolean=false;

  constructor(private http:HttpClient){
    this.captcha = '';
    this.correo = environment.baseEmail;
  }
  onSubmit(data:any){
    this.http.post('http://localhost:4000/api/usuarios', data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.log(data);
  }
  contactForm = new UntypedFormGroup({
    email: new UntypedFormControl('',Validators.required),
    password: new UntypedFormControl('',Validators.required),
  })

  get email(){return this.contactForm.get('email')}
  get password(){return this.contactForm.get('password')}

  ngOnInit(): void {
  }

  validacion(){
    //console.log(this.formulario.value);
    this.activarMsg=true;
  }
  
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.captcha = captchaResponse;
  }


}
