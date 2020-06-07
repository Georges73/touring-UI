import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Ticket } from '../model/ticket';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

 // @Input() 
  ticket: Ticket [];
  id: number;

  constructor(private service: BackendService, private route: ActivatedRoute) { }

  ngOnInit(): void{
   // this.id = 1;
    this.getTickets();
  }

  getTickets(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getTicketByCustomerId(id).subscribe(ticket => this.ticket = ticket);
  }

  share() {
    window.alert('The product has been shared!');
  }

}
