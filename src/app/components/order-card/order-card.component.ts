import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Order } from 'src/app/data/models/order';
import { OrderFormComponent } from '../order-form/order-form.component';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  @Input() order!: Order;
  public indicatorColor: string = 'white';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.indicatorColor = this.getIndicatorColor();
  }

  public displayDialog(): void {
    this.dialog.open(OrderFormComponent, {
      data: this.order
    }).afterClosed()
      .subscribe(data => {
        if (!!data) {
          //TODO: Perform actual HTTP POST request
          this.order = data
          // local change ^
        }; 
      });
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