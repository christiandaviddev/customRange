import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'ngc-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit, OnDestroy {



  @Input() min = 0;
  @Input() max = 0;
  @Input() type = '';

  rangeSubscriptions: Subscription[] = [];
  clickRange$: any;

  firstRangePoint: HTMLSpanElement;
  lastRangePoint: HTMLSpanElement;

  // firstRangeValue: number;
  // lastRangeValue: number;

  isMouseDownEvent: boolean;
  filterValue:number = 0;

  constructor() { }

  ngOnInit(): void {
    const body = document.body as HTMLElement;
    this.rangeSubscriptions.push(this.setRangePointByClick());
    // this.setValueRangePoint(firtsRange, 0);
    // this.setValueRangePoint(lastRange, range.offsetWidth);
  }

  ngOnDestroy(): void {
   this.rangeSubscriptions.forEach((s: Subscription) => s.unsubscribe());
  }

  setRangePointByClick(): Subscription {
    console.log('setRangePointByClick');
    const range = document.getElementById('range') as HTMLDivElement;
    this.firstRangePoint = document.getElementById('first-range-point') as HTMLDivElement;
    this.lastRangePoint = document.getElementById('last-range-point') as HTMLDivElement;

    this.firtsPointValue = 0;
    this.lastPointValue = range.offsetWidth;
    return fromEvent(range, 'mousedown')
      .pipe(
        debounceTime(180),
        distinctUntilChanged(),
        map((event: MouseEvent) => {
          let valueX = event.pageX;
          console.log('valueX a', event.pageX);
          valueX = valueX >= range.offsetWidth ? range.offsetWidth : valueX;
          valueX = valueX < 0 ? 0 : valueX;
          console.log('valueX', valueX);
          return valueX;
        })
      ).subscribe(data => {
          console.log('data', data);
          const value = this.max * ((data / 2) / 100);
          this.filterValue = value >= this.max ? this.max : value;
          // rangePoint.style.left = data - Number(rangePoint.offsetWidth) + 'px';

          this.checkRangePoints(data, this.firtsPointValue, this.lastPointValue);
    });
  }

  checkRangePoints(newPosition, firtsPosition, lastPosition) {
    console.log('newPosition, firtsPosition, lastPosition', newPosition, firtsPosition, lastPosition)
    let restValueLeft = newPosition - firtsPosition;
    restValueLeft = restValueLeft < 0 ? restValueLeft * -1 : restValueLeft;

    let restValueRight = newPosition - lastPosition;
    restValueRight = restValueRight < 0 ? restValueRight * -1 : restValueRight;

    console.log('restValueLeft > restValueRight', restValueLeft , restValueRight);
    if (restValueLeft <= restValueRight) {
      this.firtsPointValue = newPosition;
    } else{
      this.lastPointValue = newPosition;
    }
  }

  // setValueRangePoint(rangePoint: HTMLDivElement, value: number) {
  //   rangePoint.style.left = value - Number(rangePoint.offsetWidth) + 'px';
  // }

  mouseDownEvent(evnt: any, id: string) {
    console.log('mouseDownEvent');
    // this.isMouseDownEvent = true;
    // const body = document.body as HTMLElement;
    // const range = document.getElementById('range') as HTMLDivElement;
    // const firtsRange = document.getElementById(id) as HTMLDivElement;
    // this.firstRangeSubscription = fromEvent(body, 'mousemove').pipe(
    //   map((event: MouseEvent) => event.pageX),
    //   ).subscribe(data => {
    //     console.log('evnt', evnt);
    //     if ((this.max * (((data - (range.offsetWidth - (range.offsetWidth * 1))) / 2) / 100) <= this.max) &&
    //     (this.max * (((data - (range.offsetWidth )) / 2) / 100) >= (this.min - (range.offsetWidth * 1))) && this.isMouseDownEvent) {
    //       firtsRange.style.left = (data - Number(range.offsetWidth)) + 'px';
    //       console.log('VALUE ', data, this.max * ((data / 2) / 100), range.offsetWidth, firtsRange.style.left );
    //     }
    // });
  }

  mouseUpEvent(evnt: any, id: string) {
    console.log('fin');
    this.isMouseDownEvent = false;
    // this.firstRangeSubscription.unsubscribe();
  }


  public get firtsPointValue(): number {
    const position = this.firstRangePoint.style.left.replace('px', '');
    console.log('firstRangePoint', position);
    return Number(position);
  }

  public set firtsPointValue(v: number) {
    this.firstRangePoint.style.left = String(v) + 'px';
  }

  public get lastPointValue(): number {
    const position = this.lastRangePoint.style.left.replace('px', '');
    console.log('firstRangePoint', position);
    return Number(position);
  }

  public set lastPointValue(v: number) {
    this.lastRangePoint.style.left = String(v) + 'px';
  }


  // mouseDownEvent(evnt: any, id: string) {
  //   const body = document.body as HTMLElement;
  //   const range = document.getElementById(id) as HTMLDivElement;
  //   const firtsRange = document.getElementById(id) as HTMLDivElement;
  //   this.firstRangeSubscription = fromEvent(body, 'mousemove').pipe(
  //     map((event: MouseEvent) => event.pageX),
  //   ).subscribe(data => {
  //     if ((this.max * (((data - (range.offsetWidth - (range.offsetWidth * 1))) / 2) / 100) <= this.max) &&
  //     (this.max * (((data - (range.offsetWidth )) / 2) / 100) >= (this.min - (range.offsetWidth * 1)))) {

  //       firtsRange.style.left = (data - Number(range.offsetWidth)) + 'px';
  //       console.log('VALUE ', data, this.max * ((data / 2) / 100), range.offsetWidth, firtsRange.style.left );
  //     }
  //   });
  // }

  // mouseUpEvent(evnt: any, id: string) {
  //   console.log('fin');

  //   this.firstRangeSubscription.unsubscribe();
  // }

}
