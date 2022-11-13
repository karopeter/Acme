import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      counter works!
    </p>
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {
  public counter: number;

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void  {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }
}
