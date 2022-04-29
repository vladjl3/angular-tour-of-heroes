import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { HeroService } from '../services/hero.service';
import { RetrieveHeroes, RetrieveHeroesSuccess } from '../store/hero/hero.actions';



@Injectable()
export class HeroEffects
{
  retreiveHeroes$ = createEffect( () => this.actions$.pipe(
    ofType( RetrieveHeroes ),
    switchMap( () => this.heroService.getHeroes().pipe(
      map( heroes => RetrieveHeroesSuccess( { heroes } ) )
    ) )
  ) );

  constructor(
    private actions$: Actions,
    private heroService: HeroService
  ) { }
}
