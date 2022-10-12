import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Receta } from '../models/receta.model';

@Injectable({
    providedIn: 'root'
})
export class RecetaService {
    url = 'http://localhost:4000/api/recetas/';

    constructor(private http: HttpClient) { }

    getRecetas(): Observable<any> {
        return this.http.get(environment.apiUrl + 'recetas');
    }

    editarReceta(id: string, value: Receta){
        this.http.put('http://localhost:4000/api/recetas/'+id, value).subscribe();
      }
    
    eliminarReceta(id: string): Observable<any> {
    return this.http.delete(this.url + id);
    }  

    guardarReceta(receta: Receta): Observable<any> {
    return this.http.post(this.url, receta);
    }

    obtenerReceta(id: string): Observable<any> {
    return this.http.get(this.url + id);
    }
}

