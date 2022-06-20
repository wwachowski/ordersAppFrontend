import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../data/models/order';
import { ORDERS } from '../data/mock/orders.mock';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  getForWeek(date: Date): Observable<Order[] | undefined> {
    return of(ORDERS);
    //TODO: Perform actual HTTP
  }

  getForDay(date: Date): Observable<Order[] | undefined> {
    return of(ORDERS);
    //TODO: Perform actual HTTP
  }

  getById(orderId: number): Observable<Order | undefined> {
    return of(ORDERS.find(order => order.id===orderId));
    //TODO: Perform actual HTTP
  }

  add(order: Order): void {
    ORDERS.push(order);
    //TODO: Perform actual HTTP
  }

  delete(orderId: number): void {
    ORDERS.filter(e => e.id != orderId);
    //TODO: Perform actual HTTP
  }
}
