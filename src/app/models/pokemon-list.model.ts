import { PokemonAPI } from '../models/pokemon-api'

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonAPI[];
}

