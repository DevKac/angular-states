import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { Person } from './models/person.interface';
import { Loaders } from './models/loaders.enum';
import { ErrorMessages } from './models/error-messages.enum';
import { CustomersService } from './services/customers.service';
import { EmployeesService } from './services/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private customers$: Observable<Person[]>;
  private employees$: Observable<Person[]>;
  public Loaders: typeof Loaders = Loaders;
  public ErrorMessages: typeof ErrorMessages = ErrorMessages;

  constructor(
    private customersService: CustomersService,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.customers$ = this.customersService.fetchCustomers().pipe(share()); // nie jestem fanem tego rozwiązania (z share), sprawdz jak Bence zrobił!
    this.employees$ = this.employeesService.fetchEmployeesWith404Error().pipe(share()); // nie jestem fanem tego rozwiązania (z share), sprawdz jak Bence zrobił!
  }
}
