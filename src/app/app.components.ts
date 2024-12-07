import { Component } from "@angular/core";
import { DecimalPipe, DatePipe, CurrencyPipe } from "@angular/common";

@Component({
  selector:'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date : 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})

export class AppComponent{
  num = '103.123';
  birthday = new Date (1999,3,20);
  cost = 4560.34
}