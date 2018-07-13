import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadSearchComponent } from './launchpad-search.component';

describe('LaunchpadSearchComponent', () => {
  let component: LaunchpadSearchComponent;
  let fixture: ComponentFixture<LaunchpadSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchpadSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
