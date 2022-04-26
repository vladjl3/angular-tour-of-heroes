import { Component, OnInit } from '@angular/core';

import { uniqueNamesGenerator, Config, starWars } from 'unique-names-generator';

import { Hero } from '../interfaces';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  heroesTitle: string = 'Представленные герои ';
  nameGeneratorConfig: Config = {
    dictionaries: [starWars],
  };

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  generate(): void {
    let name = uniqueNamesGenerator(this.nameGeneratorConfig);
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  sortBy(value: string): void {
    switch (value) {
      case 'power':
        this.heroes.sort((a, b) => b.power - a.power);
        break;
      case 'id_desc':
        this.heroes.sort((a, b) => b.id - a.id);
        break;
      case 'id_asc':
        this.heroes.sort((a, b) => a.id - b.id);
    }
  }
}
