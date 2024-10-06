import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, switchMap, toArray } from 'rxjs';
import { PokemonList } from '../models/pokemon-list.model';
import { Pokemon } from '../models/pokemon.model';
import { PokemonAPI } from '../models/pokemon-api';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList(offset: number, limit: number): Observable<PokemonList> {
    return this.http.get<PokemonList>(`${this.apiUrl}?offset=${offset}&limit=${limit}`);
  }

  getPokemonDetails(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${name}`);
  }

  getPokemons(offset: number, limit: number): Observable<Pokemon[]> {
    return this.getPokemonList(offset, limit).pipe(
      map((response) => response.results),
      mergeMap(
        (pokemonResources: PokemonAPI[]) => {
          return pokemonResources;
        },
        5 // Requests limits
      ),
      mergeMap((pokemonResource: PokemonAPI) => {
        return this.getPokemonDetails(pokemonResource.name);
      }),
      toArray()
    );
  }


}
