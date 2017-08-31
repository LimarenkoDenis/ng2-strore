import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class UtilsService {

  private messages$: Subject<string> = new Subject();

  public constructor() { }

  public onMessage(): Observable<string> {
    return this.messages$.asObservable();
  }

  public pushMessage(msg: string): void {
    this.messages$.next(msg);
  }
}
