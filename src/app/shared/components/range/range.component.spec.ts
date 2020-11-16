import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, Subscription } from 'rxjs';

import { RangeComponent } from './range.component';

describe('RangeComponent', () => {
  let component: RangeComponent;
  let fixture: ComponentFixture<RangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(('#ngOnInit'), () => {
    it('set position bullets' , () => {
      component.ngOnInit();
      expect(component.leftBulletPosition).toEqual(0);
      expect(component.rightBulletPosition).toEqual(200);
    });
  });
  describe(('#ngOnDestroy'), () => {
    it('unsubscribe' , () => {
      const sub: Subscription = of(true).subscribe();
      component['rangeSubscriptions'].push(sub);
      spyOn(sub, 'unsubscribe');

      component.ngOnDestroy();
      expect(sub.unsubscribe).toHaveBeenCalled();
    });
  });
  describe(('#getMousePosition'), () => {
    it('get position' , () => {
      const postion: number = 5;

      const newPosition: number = component['getMousePosition'](postion);
      expect(newPosition).toEqual(postion);
    });
    it('get position (max)' , () => {
      const postion: number = 201;

      const newPosition: number = component['getMousePosition'](postion);
      expect(newPosition).toEqual(200);
    });
    it('get position (min)' , () => {
      const postion: number = -1;

      const newPosition: number = component['getMousePosition'](postion);
      expect(newPosition).toEqual(0);
    });
  });
  describe(('#getValueForFilter'), () => {
    it('get value for filter' , () => {
      const postion: number = 50;
      const maxPrice: number = 100;

      const valueForFilter: number = component['getValueForFilter'](postion, maxPrice);
      expect(valueForFilter).toEqual(25);
    });
    it('get value for filter(max)' , () => {
      const postion: number = 201;
      const maxPrice: number = 100;

      const valueForFilter: number = component['getValueForFilter'](postion, maxPrice);
      expect(valueForFilter).toEqual(100);
    });
  });
  describe(('#processNewPosition'), () => {
    it('set value to leftBulletPosition' , () => {
      const postion: number = 99;
      const maxPrice: number = 100;
      component.leftBulletPosition = 0;
      component.rightBulletPosition = 200;
      component['leftPrice'] = 0;
      component['rightPrice'] = 0;

      component['processNewPosition'](postion, maxPrice);
      expect(component.leftBulletPosition).toEqual(89);
      expect(component.rightBulletPosition).toEqual(200);
      expect(component['leftPrice']).toEqual(100);
      expect(component['rightPrice']).toEqual(0);
    });
    it('set value to rightBulletPosition' , () => {
      const postion: number = 150;
      const maxPrice: number = 100;
      component.leftBulletPosition = 0;
      component.rightBulletPosition = 200;
      component['leftPrice'] = 0;
      component['rightPrice'] = 0;

      component['processNewPosition'](postion, maxPrice);
      expect(component.leftBulletPosition).toEqual(0);
      expect(component.rightBulletPosition).toEqual(140);
      expect(component['leftPrice']).toEqual(0);
      expect(component['rightPrice']).toEqual(100);
    });
  });
  describe(('#getDifference'), () => {
    it('diference value is positive' , () => {
      const postionA: number = 1;
      const postionB: number = 9;
      const diference: number = component['getDifference'](postionA, postionB);

      expect(diference).toEqual(8);
    });
    it('diference value is positive' , () => {
      const postionA: number = 9;
      const postionB: number = 10;
      const diference: number = component['getDifference'](postionA, postionB);

      expect(diference).toEqual(1);
    });
  });
  describe(('#setRangePointByClick'), () => {
    it('set and emit rangeChange' , () => {

      spyOn<any>(component, 'getMousePosition').and.returnValue(15);
      spyOn<any>(component, 'getValueForFilter').and.returnValue(100);
      spyOn<any>(component, 'processNewPosition');
      spyOn(component, 'onTouch');
      spyOn(component, 'onChange');
      spyOn(component.rangeChange, 'emit');
      component.maxPrice = 20;

      component.setRangePointByClick(10);
      expect(component['getMousePosition']).toHaveBeenCalledWith(10);
      expect(component['getValueForFilter']).toHaveBeenCalledWith(15, 20);
      expect(component['processNewPosition']).toHaveBeenCalledWith(15, 100);
      expect(component['onTouch']).toHaveBeenCalled();
      expect(component['onChange']).toHaveBeenCalled();
      expect(component.rangeChange.emit).toHaveBeenCalled();
    });
  });
});
