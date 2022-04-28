import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../interfaces';
import { HeroService } from '../../services/hero.service';

@Component( {
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
} )
export class HeroSearchComponent implements OnInit
{
  @Input()
  heroes$?: Observable<Hero[]>;

  @Output()
  private searchEvent = new EventEmitter<string>();

  constructor() { }

  onInput( inputValue: string ): void
  {
    this.searchEvent.emit( inputValue );
  }

  ngOnInit(): void
  {
  }

}
