import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/data/models/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  orders: Order[] | undefined;

  constructor(private _orders: OrdersService) { }

  ngOnInit(): void {
    this.displayOrdersByDate(new Date(), 'week');
    // console.log(localStorage.getItem('user'));
    // console.log(JSON.parse(localStorage.getItem('user')!))
  }

  displayOrdersByDate(date: Date, period: 'week' | 'day') {
    const data: Observable<Order[] | undefined> = period === 'week' ? this._orders.getForWeek(date) : this._orders.getForDay(date);
    data.subscribe({
      error: (err) => {
        console.log(err);
      },
      next: (res) => {
        this.orders = !!res ? res : [];
      }
    })
  }
}
