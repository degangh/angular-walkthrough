import { Component, OnInit } from '@angular/core';
import { Launchpad } from '../Launchpad';
import { PADS } from '../mock-launchpads';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  launchpads = PADS;

  selectedPad: Launchpad;

  onSelect(launchpad: Launchpad): void {
    this.selectedPad = launchpad;
  }
}
