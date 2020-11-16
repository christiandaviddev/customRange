import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeWhile, tap } from 'rxjs/operators';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomParam } from 'src/app/services/filter-products/interfaces/custom-param.interface';

@Component({
  selector: 'ngc-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeComponent),
      multi: true
    }
  ]
})
export class RangeComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input('min') minPrice: number = 0;
  @Input('max') maxPrice = 0;
  @Input() values: number[] = [];
  @Input() type = '';

  @Output() rangeChange: EventEmitter<CustomParam> = new EventEmitter<CustomParam>();


  private rangeSubscriptions: Subscription[] = [];
  private leftBullet: HTMLSpanElement;
  private rightBullet: HTMLSpanElement;

  // firstRangeValue: number;
  // lastRangeValue: number;

  isMouseDownEvent: boolean;
  filterValue = 0;

  isDisabled: boolean = false;
  onChange = (_: any) => {};
  onTouch = () => {};

  constructor() { }

  writeValue(obj: CustomParam): void {
    console.log('writeValue', obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(state: boolean): void {
    this.isDisabled = state;
  }

  ngOnInit(): void {
    const body = document.body as HTMLElement;
    this.setRangePointByClick();
  }

  ngOnDestroy(): void {
   this.rangeSubscriptions.forEach((s: Subscription) => s.unsubscribe());
  }

  setRangePointByClick(): void {
    console.log('setRangePointByClick');
    const range = document.getElementById('range') as HTMLDivElement;
    this.leftBullet = document.getElementById('first-range-point') as HTMLDivElement;
    this.rightBullet = document.getElementById('last-range-point') as HTMLDivElement;

    this.leftBulletPosition = 0;
    this.rightBulletPosition = range.offsetWidth;
    const sub: Subscription = fromEvent(range, 'mousedown')
      .pipe(
        debounceTime(180),
        map((event: MouseEvent) => {
          let valueX = event.pageX;
          valueX = valueX >= range.offsetWidth ? range.offsetWidth : valueX;
          valueX = valueX < 0 ? 0 : valueX;
          return valueX;
        })
      ).subscribe(mousePosition => {
          const value = this.maxPrice * ((mousePosition / 2) / 100);
          this.filterValue = value >= this.maxPrice ? this.maxPrice : value;
          this.setPositionPoint(mousePosition);
          this.onTouch();
          this.onChange({left: this.leftBulletPosition, right: this.rightBulletPosition});
    });

    this.rangeSubscriptions.push(sub);
  }

  setPositionPoint(mousePosition: number) {
    let newBulletPosition = mousePosition - this.leftBullet.offsetWidth;

    const differenceFromLeft = this.getDifference(newBulletPosition, this.leftBulletPosition);

    newBulletPosition = mousePosition - this.rightBullet.offsetWidth;
    const differenceFromRight = this.getDifference(newBulletPosition, this.rightBulletPosition);

    if (differenceFromLeft <= differenceFromRight) {
      this.leftBulletPosition = newBulletPosition;
    } else{
      this.rightBulletPosition = newBulletPosition;
    }
  }

  private getDifference(positionA: number, positionB: number) {
    positionA = positionA - positionB;
    return positionA < 0 ? positionA * -1 : positionA;
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


  public get leftBulletPosition(): number {
    const position = this.leftBullet.style.left.replace('px', '');
    // console.log('firstRangePoint', position);
    return Number(position);
  }

  public set leftBulletPosition(v: number) {
    this.leftBullet.style.left = String(v) + 'px';
  }

  public get rightBulletPosition(): number {
    const position = this.rightBullet.style.left.replace('px', '');
    // console.log('firstRangePoint', position);
    return Number(position);
  }

  public set rightBulletPosition(v: number) {
    this.rightBullet.style.left = String(v) + 'px';
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
