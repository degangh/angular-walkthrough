import { Component, OnInit } from '@angular/core';
import { Launchpad } from '../Launchpad';
import { LaunchpadService} from '../launchpad.service';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {

  constructor(private launchpadService: LaunchpadService) { }

  ngOnInit() {
    this.getPads();
  }

  launchpads: Launchpad[];

  getPads(): void {
    this.launchpadService.getPads().subscribe(launchpads => this.launchpads = launchpads);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return}
    this.launchpadService.addPad({ name } as Launchpad).subscribe(launchpad => {this.launchpads.push(launchpad)})
  }

}
