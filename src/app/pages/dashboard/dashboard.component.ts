import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';

import { Hero } from '../../interfaces';

import { HeroService } from '../../services/hero.service';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
} )
export class DashboardComponent implements OnInit
{

  heroes: Hero[] = [];
  heroes$?: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor( private heroService: HeroService ) { }

  ngOnInit(): void
  {
    this.getHeroes();
    this.searchHeroes( this.searchTerms );
  }

  getHeroes(): void
  {
    this.heroService.getHeroes()
      .subscribe( heroes => this.heroes = heroes
        .sort( ( a, b ) => b.power - a.power )
        .slice( 0, 4 )
      );
  }

  search( term: string ): void
  {
    this.searchTerms.next( term );
  }

  searchHeroes( searchTerms: Subject<string> ): void
  {
    console.log( searchTerms );
    this.heroes$ = searchTerms.pipe(
      debounceTime( 300 ),
      distinctUntilChanged(),
      switchMap( ( term: string ) => this.heroService.searchHeroes( term ) )
    );
  }

}
