import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  totalPokemons: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    const offset = (this.currentPage - 1) * this.itemsPerPage;
    this.pokemonService.getPokemons(offset, this.itemsPerPage).subscribe(
      (data) => {
        this.pokemons = data;
        this.filteredPokemons = data;
      },
      (error) => {
        console.error('Error fetching pokémons', error);
      }
    );
  }

  // onFilterChange(filteredPokemons: Pokemon[]): void {
  //   this.filteredPokemons = filteredPokemons;
  // }

  // onPageChange(page: number): void {
  //   this.currentPage = page;
  //   this.loadPokemons();
  // }

  trackById(index: number, pokemon: Pokemon): number {
    return pokemon.id;
  }

}
