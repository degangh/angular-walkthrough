import { Component, OnInit, Input } from '@angular/core';
import { Launchpad } from '../launchpad';
@Component({
  selector: 'app-pad-detail',
  templateUrl: './pad-detail.component.html',
  styleUrls: ['./pad-detail.component.css']
})
export class PadDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() pad: Launchpad

}
