import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Qui-Gon Jinn', power: 200 },
      { id: 12, name: 'Obi-Wan Kenobi', power: 150 },
      { id: 13, name: 'Mace Windu', power: 100 },
      { id: 14, name: 'Anakin Skywalker', power: 3000 },
      { id: 15, name: 'Padme', power: 90 },
      { id: 16, name: 'Luke Skywalker', power: 2000 },
      { id: 17, name: 'Leia Organa', power: 200 },
      { id: 18, name: 'Han Solo', power: 500  },
      { id: 19, name: 'R2-D2', power: 50 },
      { id: 20, name: 'C-3PO',  power: 30 }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
