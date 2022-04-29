import { createAction, props } from "@ngrx/store";
import { Hero } from "src/app/interfaces";

export const RetrieveHeroes = createAction( '[HERO] Retrieving heroes from HeroSevice...' );

export const RetrieveHeroesSuccess = createAction( '[HERO] Successfully retrieved heroes from HeroService', props<{ heroes: Hero[]; }>() );

export const RetrieveHeroesFail = createAction( '[HERO] Failure on retrieving heroes from HeroService', props<{ heroes: Hero[]; }>() );