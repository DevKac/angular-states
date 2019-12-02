import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ServerUrl } from '../config/config';
import { Person } from '../models/person.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http: HttpClient) { }

  public fetchCustomers(): Observable<Person[]> {
    return this.http.get(ServerUrl + 'customers').pipe(
      map((response: Object) => {
        return response['customers'];
      })
    );
  }

  public fetchCustomersWith404Error(): Observable<Person[]> {
    return this.http.get(ServerUrl + 'customers2').pipe(
      map((response: Object) => {
        return response['customers'];
      })
    );
  }
}
