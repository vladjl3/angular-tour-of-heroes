import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Hero } from 'src/app/interfaces';

@Component( {
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: [ './heroes-list.component.css' ]
} )
export class HeroesListComponent implements OnInit
{

  @Input()
  public heroes?: Hero[] | null;

  @Input()
  public actionButtons?: TemplateRef<unknown>;

  constructor() { }

  ngOnInit(): void
  {

  }

}
