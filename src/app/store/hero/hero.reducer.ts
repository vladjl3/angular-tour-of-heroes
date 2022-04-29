import { createReducer, on } from "@ngrx/store";
import { Hero } from "src/app/interfaces";
import { HeroesRetreivedAction } from "./hero.actions";

export const HEROES_NODE = 'heroes-list';

export interface HeroState
{
  heroes: Hero[];
}

export const initialState: HeroState = {
  heroes: []
};

export const heroReducer = createReducer( initialState,
  on( HeroesRetreivedAction, ( state, action ) => ( {
    ...state,
    heroes: [ { id: 20, name: 'C-3PO', power: 30 } ]
  } ) )
);