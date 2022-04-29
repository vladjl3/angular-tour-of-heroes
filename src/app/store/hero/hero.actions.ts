import { createAction, props } from "@ngrx/store";
import { Observable } from "rxjs";
import { Hero } from "src/app/interfaces";

export const RetrieveHeroesAction = createAction( '[HERO:REQUEST] Retrieving heroes from HeroSevice' );

export const HeroesRetreivedAction = createAction( '[HERO:SUCCESS] Retrieved heroes from HeroesService', props<{ heroes: Hero[]; }>() );