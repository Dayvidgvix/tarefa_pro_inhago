import { Pokemon } from './../pokemon';
import { PokedexService } from './pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: any
  ivo = ["one", "two", "tree"]
  

  constructor(private pokeService: PokedexService) { 
        
  }

  async ngOnInit() {
    this.pokemons = this.pokeService.allPokemons
    console.log(this.pokemons)
  }

}
