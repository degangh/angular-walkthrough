import { Injectable } from '@angular/core';
import { Launchpad } from './launchpad';
import { PADS}  from './mock-launchpads';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LaunchpadService {

  constructor(private messageService: MessageService) { }

  getPads(): Observable<Launchpad[]> {

    this.messageService.add('Fetched data ...');
    return of(PADS);

  }
}
