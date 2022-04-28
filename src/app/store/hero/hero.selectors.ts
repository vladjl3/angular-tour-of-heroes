import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Hero } from "src/app/interfaces";
import { HEROES_NODE, HeroState } from "./hero.reducer";

export const heroesFeatureSelector = createFeatureSelector<HeroState>( HEROES_NODE );

export const heroesAllSelector = createSelector( heroesFeatureSelector,
  ( state: HeroState ): Hero[] => state.heroes );