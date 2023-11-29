import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Videojuegos } from '../models/videojuegos';

const API_PATH = 'https://653153494d4c2e3f333cd848.mockapi.io/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGamesLista(): Observable<Videojuegos[]> {
    
    const path = API_PATH + 'videojuegos';
    
    return this.http.get<Videojuegos[]>(path);
  
  }
}