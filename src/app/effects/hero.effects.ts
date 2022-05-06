import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { HeroService } from '../services/hero.service';
import { AddHero, AddHeroSuccess, GenerateHero, RetrieveHeroes, RetrieveHeroesSuccess } from '../store/hero/hero.actions';



@Injectable()
export class HeroEffects
{
  retreiveHeroes$ = createEffect( () => this.actions$.pipe(
    ofType( RetrieveHeroes ),
    switchMap( () => this.heroService.getHeroes().pipe(
      map( heroes => RetrieveHeroesSuccess( { heroes } ) )
    ) )
  ) );

  addHero$ = createEffect( () => this.actions$.pipe(
    ofType( AddHero ),
    switchMap(
      ( action ) => this.heroService.addHero( action ).pipe(
        map( hero => AddHeroSuccess( hero ) )
      ) )
  ) );

  generateHero$ = createEffect( () => this.actions$.pipe(
    ofType( GenerateHero ),
    switchMap(
      () => this.heroService.generateHero().pipe(
        map( hero => AddHeroSuccess( hero ) )
      ) )
  ) );

  constructor(
    private actions$: Actions,
    private heroService: HeroService
  ) { }
}
