import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { HttpClientJsonpModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CreateCustomersComponent } from './create-customers/create-customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    ListCustomersComponent,
    CreateCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientJsonpModule,
    TableModule,
    ButtonModule,
    DialogModule,
    FormsModule, 
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule
  ]
})
export class CustomersModule { }
