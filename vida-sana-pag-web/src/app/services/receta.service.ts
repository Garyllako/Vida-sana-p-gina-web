import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RecetaService {
    constructor(private http: HttpClient) { }

    getRecetas(): Observable<any> {
        return this.http.get(environment.apiUrl + 'recetas');
    }
}

