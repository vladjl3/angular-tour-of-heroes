import { createAction, props } from "@ngrx/store";
import { Hero } from "src/app/interfaces";

const HERO_ACTION_CATEGORY = '[HERO] ';

export const RetrieveHeroes = createAction(
  HERO_ACTION_CATEGORY + 'Retrieving heroes from HeroSevice...'
);

export const RetrieveHeroesSuccess = createAction(
  HERO_ACTION_CATEGORY + 'Successfully retrieved heroes from HeroService',
  props<{ heroes: Hero[]; }>()
);

export const RetrieveHeroesFail = createAction(
  HERO_ACTION_CATEGORY + 'Failure on retrieving heroes from HeroService',
  props<{ heroes: Hero[]; }>()
);

export const AddHero = createAction(
  HERO_ACTION_CATEGORY + 'add hero by name',
  props<Hero>()
);

export const GenerateHero = createAction(
  HERO_ACTION_CATEGORY + 'generate hero'
);

export const AddHeroSuccess = createAction(
  HERO_ACTION_CATEGORY + 'add hero success',
  props<Hero>()
);