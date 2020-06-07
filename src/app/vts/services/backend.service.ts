import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Account } from '../model/account';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  
  private apiAccount = 'api/accounts/';
  private apiTicket = 'api/tickets/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}




  createTicket(ticket: Ticket): Observable<Ticket> {
    console.log('createticket fromservice')
    return this.http.post<Ticket>(this.apiTicket + 'addTicket' + '/', ticket, this.httpOptions).pipe(
    );
  }




  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiAccount).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Account[]>('getHeroes', []))
    );
  }

  getTicketByCustomerId(id: number): Observable<any> {
    console.log('***********id***********************' + id);
    const url = `${this.apiAccount + id + '/' + 'tickets'}`;
    return this.http.get<Ticket>(url).pipe(
      tap((_) => this.log(`fetched account id=${id}`)),
      catchError(this.handleError<Ticket>(`getHero id=${id}`))
    );
  }

  getCustomerById(id: number): Observable<any> {
    console.log('***********id***********************' + id);
    const url = `${this.apiAccount + id }`;
    return this.http.get<Ticket>(url).pipe(
      tap((_) => this.log(`fetched account id=${id}`)),
      catchError(this.handleError<Ticket>(`getHero id=${id}`))
    );
  }

  getTicketByCustomerId2(id: number): Observable<any> {
    console.log('***********id***********************' + id);
    return this.http.get(this.apiAccount + id + '/' + 'tickets', {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }
}
