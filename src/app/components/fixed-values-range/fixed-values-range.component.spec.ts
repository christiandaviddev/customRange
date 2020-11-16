import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FixedValuesRangeComponent } from './fixed-values-range.component';

describe('FixedValuesRangeComponent', () => {
  let component: FixedValuesRangeComponent;
  let fixture: ComponentFixture<FixedValuesRangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedValuesRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedValuesRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
