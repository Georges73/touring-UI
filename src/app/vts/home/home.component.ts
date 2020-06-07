import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  accounts: Account[];

  constructor(private service: BackendService) { }

  

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts(): void {
    this.service.getAll().subscribe(accounts => this.accounts = accounts);
  }

  findTickets(account: Account){
    

  }

}
