import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-receta-screen',
  templateUrl: './crear-receta-screen.component.html',
  styleUrls: ['./crear-receta-screen.component.css']
})
export class CrearRecetaScreenComponent implements OnInit {
  activarMsg:boolean=false;
  constructor(private http:HttpClient){}
  onSubmit(data:any){
    this.http.post('http://localhost:4000/api/recetas', data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.log(data);
  }
  validacion(){
    this.activarMsg=true;
  }

  ngOnInit(): void {
  }
}


