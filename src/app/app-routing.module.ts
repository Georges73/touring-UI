import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './vts/tickets/tickets.component';
import { CreateTicketComponent } from './vts/create-ticket/create-ticket.component';

const routes: Routes = [
  { path: 'detail/:id', component: TicketsComponent },
  {path: 'createTicket/:id', component: CreateTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
