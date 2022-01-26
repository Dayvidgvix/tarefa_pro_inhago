import { Pokemon } from './../pokemon';
import { PokedexService } from './pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: any = []
  teste = [2,3,4,5]



  constructor(private pokeService: PokedexService) {

  }

  async ngOnInit() {
    await this.iniciarArray()
    // console.log(this.pokemons)
  }

  async iniciarArray() {
    this.pokemons = this.pokeService.getAllPokemons().reverse()
    console.log(this.pokemons)
  }

}
