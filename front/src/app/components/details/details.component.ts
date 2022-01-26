import { PokedexService } from './../pokedex/pokedex.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  poke: any

  constructor(private activeRoute: ActivatedRoute, private service: PokedexService) { 
    
  }

  ngOnInit(): void {
    this.getPokemon()
    
  }

  async getPokemon(){
    const id = this.activeRoute.snapshot.params['id'];
    this.service.getPokemon(id ).subscribe(i => {this.poke = i; console.log(this.poke)} )    
  }

}
