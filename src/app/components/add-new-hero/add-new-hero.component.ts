import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-new-hero',
  templateUrl: './add-new-hero.component.html',
  styleUrls: ['./add-new-hero.component.css'],
})
export class AddNewHeroComponent implements OnInit {
  @Output()
  private heroAdd = new EventEmitter<string>();

  @Output()
  private heroGenerate = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addHero(name: string): void {
    this.heroAdd.emit(name);
  }

  generateHero(): void {
    this.heroGenerate.emit();
  }
}
