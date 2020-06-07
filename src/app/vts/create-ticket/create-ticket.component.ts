import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../model/ticket';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Location } from '@angular/common';


// {{ticket.accountId }}

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {
  @Input() ticket: Ticket;
  


  constructor(private service: BackendService, private route: ActivatedRoute, private location: Location) { }



  ngOnInit(): void {

    this.createTicketForm();
  }

  createTicketForm(): void {
    const accountId = +this.route.snapshot.paramMap.get('id');

    this.ticket = new Ticket();
    this.ticket.setAccountID(accountId);
    console.log('hello' + this.ticket.accountId);

   // this.service.createTicket({ticket.accountID} ).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.createTicket(this.ticket)      .subscribe(() => this.goBack());
  }
}



