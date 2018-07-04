import { Component, OnInit } from '@angular/core';
import { Launchpad } from '../launchpad';
import { LaunchpadService } from '../launchpad.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  launchpads: Launchpad[] = [];

  constructor(private launchpadService: LaunchpadService) { }

  ngOnInit() {
    this.getPads();
  }

  getPads(): void {
    this.launchpadService.getPads()
      .subscribe(launchpad => this.launchpads = launchpad.slice(1, 5));
  }
}