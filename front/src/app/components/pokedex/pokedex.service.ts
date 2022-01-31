import { Pokemon } from './../pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  id?: number
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
  allPokemons: any[] = []

  constructor(private http: HttpClient) { 
    
  }

  getPokemon(id:number): Promise<any>{
    return this.http.get<any>(`${this.baseUrl}${id}`).toPromise()
  }

}
