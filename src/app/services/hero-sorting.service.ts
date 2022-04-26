import { Injectable } from '@angular/core';
import { Hero, SortingOption } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroSortingService {
  readonly sortingOptions: SortingOption[] = [
    {
      name: 'По id (asc)',
      value: 'id_asc',
      handler: this.sortByIdAsc,
    },
    {
      name: 'По id (desc)',
      value: 'id_desc',
      handler: this.sortByIdDesc,
    },
    {
      name: 'По силе (desc)',
      value: 'power_desc',
      handler: this.sortByPowerDesc,
    },
  ];

  constructor() {}

  sortHeroes(receivedOption: string, heroes: Hero[]): Hero[] {
    this.sortingOptions.forEach((sortingOption) => {
      if (sortingOption.value === receivedOption) {
        sortingOption.handler(heroes);
      }
    });
    return heroes;
  }

  private sortByIdAsc(heroes: Hero[]): Hero[] {
    return heroes.sort((a, b) => a.id - b.id);
  }

  private sortByIdDesc(heroes: Hero[]): Hero[] {
    return heroes.sort((a, b) => b.id - a.id);
  }

  private sortByPowerDesc(heroes: Hero[]): Hero[] {
    return heroes.sort((a, b) => b.power - a.power);
  }
}
