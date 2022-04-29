import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { HeroService } from '../services/hero.service';
import { HeroesRetreivedAction, RetrieveHeroesAction } from '../store/hero/hero.actions';



@Injectable()
export class HeroEffects
{
  retreiveHeroes$ = createEffect( () => this.actions$.pipe(
    ofType( RetrieveHeroesAction ),
    switchMap( () => this.heroService.getHeroes().pipe(
      map( heroes => HeroesRetreivedAction( { heroes } ) )
    ) )
  ) );

  constructor( private actions$: Actions, private heroService: HeroService ) { }

}
