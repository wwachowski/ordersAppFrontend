import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MaterialModule } from 'src/app/materials/material/material.module';
import { OrderCardComponent } from 'src/app/components/order-card/order-card.component';
import { OrderFormComponent } from 'src/app/components/order-form/order-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    OrderCardComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
