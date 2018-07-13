import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap

} from 'rxjs/operators';


import { Launchpad } from '../launchpad';
import { LaunchpadService } from '../launchpad.service';


@Component({
  selector: 'app-launchpad-search',
  templateUrl: './launchpad-search.component.html',
  styleUrls: ['./launchpad-search.component.css']
})
export class LaunchpadSearchComponent implements OnInit {
  launchpads$: Observable<Launchpad[]>;
  private searchTerm = new Subject<string>();
  
  constructor(private launchpadService: LaunchpadService) { }

  search(term: string): void {
    this.searchTerm.next(term)
  }

  ngOnInit() {
    this.launchpads$ = this.searchTerm.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.launchpadService.searchPads(term))
    )
  }

}
