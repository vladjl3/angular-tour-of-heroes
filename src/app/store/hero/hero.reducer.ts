import { createReducer, on } from "@ngrx/store";
import { Hero } from "src/app/interfaces";
import { HeroesRetrieveAction } from "./hero.actions";


export const HEROES_NODE = 'heroes-list';

export interface HeroState
{
  heroes: Hero[];
}

export const initialState: HeroState = {
  heroes: [ { id: 11, name: 'Qui-Gon Jinn', power: 200 } ]
};

export const heroReducer = createReducer( initialState, on( HeroesRetrieveAction, state => ( {
  ...state
} ) ),
);