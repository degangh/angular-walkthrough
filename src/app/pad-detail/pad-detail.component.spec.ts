import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadDetailComponent } from './pad-detail.component';

describe('PadDetailComponent', () => {
  let component: PadDetailComponent;
  let fixture: ComponentFixture<PadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
