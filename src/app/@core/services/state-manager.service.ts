import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class StateService {

  private applicationTitleBS$ = new BehaviorSubject<string>('');
  public readonly applicationTitle$ = this.applicationTitleBS$.asObservable();

  setApplicationTitle(titulo: string) {
    this.applicationTitleBS$.next(titulo);
  }

}
