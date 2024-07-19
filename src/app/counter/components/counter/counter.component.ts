import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;
  //Por defecto

  increaseBy(value: number): void {
    this.counter > 0 ? (this.counter += value) : (this.counter = 0);
  }

  reset(): void {
    this.counter = 10;
  }
}
