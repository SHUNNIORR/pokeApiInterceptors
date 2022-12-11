import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { IPokemonInfo } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  pokeinfo = {} as IPokemonInfo;

  constructor(private http: HttpClient) { }

  endpoint = 'https://pokeapi.co/api/v2/';

  getPokemon(name: string){
    return this.http.get<IPokemonInfo>(this.endpoint + 'pokemon/' + name)
  }
}
