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
  allPokemons: any[]

  constructor(private http: HttpClient) { 
    this.allPokemons = this.getAllPokemons()
  }

  getPokemon(id:number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}${id}`)
  }

  getAllPokemons(): Array<any>{
    let allPokemonss: any[] = []
    for(let i=0; i<151; i++){
       this.getPokemon(i+1).subscribe(poke => allPokemonss[i] = poke)
      }  
    return allPokemonss
  }

}
