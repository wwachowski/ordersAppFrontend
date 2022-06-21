import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/data/models/order';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  @Input() order!: Order;
  public indicatorColor!: string;

  constructor() { }

  ngOnInit(): void {
    this.indicatorColor = this.getIndicatorColor();
  }

  private getIndicatorColor(): IndicatorStateColor {
    return this.order.completed ? IndicatorStateColor.Done
      : this.isOrderExpired() ? IndicatorStateColor.Expired : IndicatorStateColor.Normal;
  }

  private isOrderExpired(): boolean {
    if ((new Date(this.order.date).valueOf()) - (new Date()).valueOf() >= 0) {
      return false;
    } return true;
  }

}

enum IndicatorStateColor {
  Done = 'rgb(41, 163, 41)',
  Expired = 'rgb(153, 0, 0)',
  Normal = 'rgb(255, 255, 102)'
}