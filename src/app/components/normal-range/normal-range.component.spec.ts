import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NormalRangeComponent } from './normal-range.component';

describe('NormalRangeComponent', () => {
  let component: NormalRangeComponent;
  let fixture: ComponentFixture<NormalRangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
