import { ServicioService } from './../../Services/servicio.service';
import { Component, Input, OnInit } from '@angular/core';
import { IPokemonInfo } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemonToSon: IPokemonInfo;

  constructor(private servicio: ServicioService) {
    this.pokemonToSon = {} as IPokemonInfo;
   }
  
  ngOnInit(): void {
  }

  isEmpty(): boolean {
    return Object.keys(this.pokemonToSon).length === 0
  }
  
}
