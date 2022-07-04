import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin-screen',
  templateUrl: './signin-screen.component.html',
  styleUrls: ['./signin-screen.component.css']
})
export class SigninScreenComponent implements OnInit {
  captcha: string;
  correo: string;
  activarMsg:boolean=false;
  constructor(private http:HttpClient){
    this.captcha = '';
    this.correo = 'lucianodelauc@gmail.com';
  }
  onSubmit(data:any){
    this.http.post('http://localhost:4000/api/usuarios', data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.log(data);
  }
  contactForm = new UntypedFormGroup({
    nombre: new UntypedFormControl('',Validators.required),
    email: new UntypedFormControl('',Validators.required),
    password: new UntypedFormControl('',Validators.required),
  })

  get nombre(){return this.contactForm.get('nombre')}
  get email(){return this.contactForm.get('email')}
  get password(){return this.contactForm.get('password')}

  ngOnInit(): void {
  }

  validacion(){
    this.activarMsg=true;
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.captcha = captchaResponse;
  }

}
