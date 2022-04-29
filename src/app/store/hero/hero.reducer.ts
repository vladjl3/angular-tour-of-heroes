import { createReducer, on } from "@ngrx/store";
import { Hero } from "src/app/interfaces";
import { RetrieveHeroesSuccess } from "./hero.actions";

export const HEROES_NODE = 'heroes-list';

export interface HeroState
{
  heroes: Hero[];
}

export const initialState: HeroState = {
  heroes: []
};

export const heroReducer = createReducer( initialState,
  on( RetrieveHeroesSuccess, ( state, action ) => ( {
    ...state,
    heroes: action.heroes
  } ) )
);