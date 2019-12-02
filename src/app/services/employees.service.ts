import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ServerUrl } from '../config/config';
import { Person } from '../models/person.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) { }

  public fetchEmployees(): Observable<Person[]> {
    return this.http.get(ServerUrl + 'employees').pipe(
      map((response: Object) => {
        return response['employees'];
      })
    );
  }

  public fetchEmployeesWith404Error(): Observable<Person[]> {
    return this.http.get(ServerUrl + 'employees2').pipe(
      map((response: Object) => {
        return response['employees'];
      })
    );
  }
}
