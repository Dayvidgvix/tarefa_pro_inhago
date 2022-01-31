import { Pokemon } from './../pokemon';
import { PokedexService } from './pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokeService: PokedexService) {
    
  }

  async ngOnInit() {
    this.pokemons = await this.getAllPokemons()
  }

  async getAllPokemons(): Promise<Pokemon[]>{
    let allPokemonss: Pokemon[] = []

    for(let i = 1; i <= 151; i++){
       const response = await this.pokeService.getPokemon(i)

       const types = response.types.map((index: any) => index.type.name)

       const poke: Pokemon = {
        id: response.id,
        name: response.name,
        types: types
      }

      allPokemonss.push(poke)

      } 
    return allPokemonss;
  }

}
