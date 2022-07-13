import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/data/models/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  public orderForm!: FormGroup;
  private newOrder?: Order;

  constructor(
    private dialogRef: MatDialogRef<OrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) private order: Order
  ) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      title: new FormControl(this.order.title),
      desc: new FormControl(this.order.desc),
      price: new FormControl(this.order.price),
      client: new FormControl(this.order.client),
      quantity: new FormControl(this.order.quantity),
      date: new FormControl(this.order.date)
    });
    this.newOrder = this.order;
  }

  public closeDialog() {
    this.newOrder = {
      id: this.order.id,
      userId: this.order.userId,
      title: this.orderForm.value.title,
      desc: this.orderForm.value.desc,
      price: this.orderForm.value.price,
      client: this.orderForm.value.client,
      quantity: this.orderForm.value.quantity,     
      date: this.orderForm.value.date,
      completed: this.order.completed
    }
    this.dialogRef.close(this.newOrder);
  }

}
