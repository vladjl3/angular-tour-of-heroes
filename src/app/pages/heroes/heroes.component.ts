import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddHero, GenerateHero, RetrieveHeroes } from 'src/app/store/hero/hero.actions';
import { Hero, SortingOption } from '../../interfaces';
import { HeroService } from '../../services/hero.service';
import { HeroSortingService } from 'src/app/services/hero-sorting.service';
import { heroesAllSelector } from 'src/app/store/hero/hero.selectors';
import { Observable } from 'rxjs';

@Component( {
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ],
} )
export class HeroesComponent implements OnInit
{
  heroes$: Observable<Hero[]> = this.store$.select( heroesAllSelector );
  heroesTitle: string = 'Представленные герои ';

  public sortingOptions: SortingOption[] =
    this.heroSortingService.sortingOptions;

  constructor(
    private heroService: HeroService,
    private heroSortingService: HeroSortingService,
    private store$: Store
  ) { }

  ngOnInit(): void
  {
    this.getHeroes();
  }

  getHeroes(): void
  {
    this.store$.dispatch( RetrieveHeroes() );
  }

  addHero( name: string ): void
  {
    this.store$.dispatch( AddHero( { name } as Hero ) );
  }

  generateHero(): void
  {
    this.store$.dispatch( GenerateHero() );
  }

  // delete( hero: Hero ): void
  // {
  //   this.heroes = this.heroes.filter( ( h ) => h !== hero );
  //   this.heroService.deleteHero( hero.id ).subscribe();
  // }

  // sortHeroes( sortOption: string ): void
  // {
  //   this.heroes = this.heroSortingService.sortHeroes( sortOption, this.heroes );
  // }
}
