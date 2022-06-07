import { Component, OnInit } from '@angular/core';
import rutinasJson from '../../../assets/json/rutinas.json';

interface RUTINAS {
  id: Number;
  title: String;
  categoria: String;
  description: String;
  url: String;
}
@Component({
  selector: 'app-rutina-screen',
  templateUrl: './rutina-screen.component.html',
  styleUrls: ['./rutina-screen.component.scss']
})
export class RutinaScreenComponent implements OnInit {
  Rutinas: RUTINAS[] = rutinasJson;
  constructor() {
    console.log(this.Rutinas);
   }

  ngOnInit(): void {
  }

}
