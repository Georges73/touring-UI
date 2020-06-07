import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './vts/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { OrdersComponent } from './vts/orders/orders.component';
import { TicketsComponent } from './vts/tickets/tickets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTicketComponent } from './vts/create-ticket/create-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    TicketsComponent,
    CreateTicketComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
