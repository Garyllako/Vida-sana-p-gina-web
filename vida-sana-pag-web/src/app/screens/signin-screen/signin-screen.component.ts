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
  activarMsg:boolean=false;
  constructor(private http:HttpClient){}
  onSubmit(data:any){
    this.http.post('http://localhost:4000/api/usuarios', data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.log(data);
  }

  ngOnInit(): void {
  }

    validacion(){
    this.activarMsg=true;
  }

}
