import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Loaders } from 'src/app/models/loaders.enum';
import { ErrorMessages } from 'src/app/models/error-messages.enum';

enum DataState {
  Loading,
  Success,
  Failure
}

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnChanges {
  @Input()
  public observableData$: Observable<any>;
  @Input()
  public loader: Loaders = Loaders.Spinner;
  @Input()
  public errorMessage: ErrorMessages = ErrorMessages.Message;
  public state: DataState;
  public DataState: typeof DataState = DataState;
  public Loaders: typeof Loaders = Loaders;
  public ErrorMessages: typeof ErrorMessages = ErrorMessages;

  constructor() {
    this.state = DataState.Loading;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.observableData$) {
      if (!changes.observableData$.currentValue) {
        this.state = DataState.Loading;
      }
      if (changes.observableData$.currentValue) {
        return this.observableData$.pipe(
          map((result: any) => {
            this.state = DataState.Success;
            return result;
          }),
          catchError(error => {
            this.state = DataState.Failure;
            return of();
          })
        ).subscribe()
      }
    }
  }
}
