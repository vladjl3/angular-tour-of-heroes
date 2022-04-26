import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortingOption } from 'src/app/interfaces';

@Component({
  selector: 'sorting-bar',
  templateUrl: './sorting-bar.component.html',
  styleUrls: ['./sorting-bar.component.css'],
})
export class SortingBarComponent implements OnInit {
  @Input()
  public options?: SortingOption[];

  @Output()
  private optionChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sortingEvent(e: Event): void {
    const target = e.target as HTMLTextAreaElement;
    this.optionChange.emit(target.value);
  }
}
