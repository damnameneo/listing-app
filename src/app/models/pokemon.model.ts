import { PokemonAPI } from '../models/pokemon-api'

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  order: number;
  abilities: Ability[];
  forms: PokemonAPI[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  sprites: Sprites;
  species: PokemonAPI;
  stats: Stat[];
  types: TypeElement[];
  past_types: PastType[];
}

export interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: PokemonAPI;
  }
  
  export interface GameIndex {
    game_index: number;
    version: PokemonAPI;
  }
  
  export interface HeldItem {
    item: PokemonAPI;
    version_details: HeldItemVersionDetail[];
  }
  
  export interface HeldItemVersionDetail {
    rarity: number;
    version: PokemonAPI;
  }
  
  export interface Move {
    move: PokemonAPI;
    version_group_details: MoveVersionGroupDetail[];
  }
  
  export interface MoveVersionGroupDetail {
    level_learned_at: number;
    move_learn_method: PokemonAPI;
    version_group: PokemonAPI;
  }
  
  export interface PastType {
    generation: PokemonAPI;
    types: TypeElement[];
  }
  
  export interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other?: OtherSprites;
    versions?: { [version: string]: { [game: string]: Sprites } };
    animated?: Sprites;
  }
  
  export interface OtherSprites {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    'official-artwork': {
      front_default: string | null;
    };
  }
  
  export interface Stat {
    base_stat: number;
    effort: number;
    stat: PokemonAPI;
  }
  
  export interface TypeElement {
    slot: number;
    type: PokemonAPI;
  }
