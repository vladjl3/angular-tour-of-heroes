import { Component, OnInit } from '@angular/core';

import { uniqueNamesGenerator, Config, starWars } from 'unique-names-generator';

import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  sortOption: string = 'id_asc';
  nameGeneratorConfig: Config = {
    dictionaries: [starWars]
  };

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  sortBy(value: string): void {
    if (value === "power") {
      this.heroes.sort((a, b) => b.power - a.power);
    }
    if (value === "id_desc") {
      this.heroes.sort((a, b) => b.id - a.id);
    }
    if (value === "id_asc") {
      this.heroes.sort((a, b) => a.id - b.id);
    }
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.heroService.addHero( { name } as Hero )
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  generate(): void {
    let name = uniqueNamesGenerator(this.nameGeneratorConfig);
    if (!name) {return;}
    this.heroService.addHero( { name } as Hero )
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
