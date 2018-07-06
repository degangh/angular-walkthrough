import { Component, OnInit, Input } from '@angular/core';
import { Launchpad } from '../launchpad';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LaunchpadService } from '../launchpad.service';
@Component({
  selector: 'app-pad-detail',
  templateUrl: './pad-detail.component.html',
  styleUrls: ['./pad-detail.component.css']
})
export class PadDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private launchpadService: LaunchpadService, private location: Location) { }

  ngOnInit() {
    this.getPad();
  }

  @Input() pad: Launchpad

  getPad(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.launchpadService.getPad(id).subscribe(launchpad => this.pad = launchpad)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.launchpadService.updateLaunchpad(this.pad).subscribe(()=>this.goBack());
  }

}
