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
  private rangeLine: HTMLParagraphElement;
  private leftBullet: HTMLSpanElement;
  private rightBullet: HTMLSpanElement;

  private leftPrice: number;
  private rightPrice: number;

  // isMouseDownEvent: boolean;

  isDisabled: boolean = false;
  onChange = (_: any) => {};
  onTouch = () => {};

  constructor() { }

  writeValue(obj: CustomParam): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(state: boolean): void {
    this.isDisabled = state;
  }

  ngOnInit(): void {
    this.rangeLine = document.getElementById('range-line') as HTMLDivElement;
    this.leftBullet = document.getElementById('left-range-bullet') as HTMLDivElement;
    this.rightBullet = document.getElementById('right-range-bullet') as HTMLDivElement;
    this.leftBulletPosition = 0;
    this.rightBulletPosition = this.rangeLine.offsetWidth;
  }

  ngOnDestroy(): void {
   this.rangeSubscriptions.forEach((s: Subscription) => s.unsubscribe());
  }

  setRangePointByClick(positionX: number): void {
    const mousePosition: number = this.getMousePosition(positionX);
    const valueForFilter: number = this.getValueForFilter(mousePosition, this.maxPrice);
    this.processNewPosition(mousePosition, valueForFilter);
    const resultRange: CustomParam = {left: this.leftPrice, right: this.rightPrice};
    this.onTouch();
    this.onChange(resultRange);
    // TODO: If there is not any ngModule input provided, a rangeChange output has to emit range values.
    this.rangeChange.emit(resultRange);
  }

  private getMousePosition(mousePosition: number): number {
    mousePosition = mousePosition >= this.rangeLine.offsetWidth ? this.rangeLine.offsetWidth : mousePosition;
    mousePosition = mousePosition < 0 ? 0 : mousePosition;
    return mousePosition;
  }

  private getValueForFilter(mousePosition: number, maxPrice: number): number {
    let value = maxPrice * ((mousePosition / 2) / 100);
    value = value >= maxPrice ? maxPrice : value;
    return value;
  }

  private processNewPosition(mousePosition: number, bulletPrice: number): void {
    let newBulletPosition = mousePosition - this.leftBullet.offsetWidth;

    const differenceFromLeft = this.getDifference(newBulletPosition, this.leftBulletPosition);

    newBulletPosition = mousePosition - this.rightBullet.offsetWidth;
    const differenceFromRight = this.getDifference(newBulletPosition, this.rightBulletPosition);

    if (differenceFromLeft <= differenceFromRight) {
      // TODO: limit position
      this.leftBulletPosition = newBulletPosition ;
      this.leftPrice = bulletPrice;
    } else{
      this.rightBulletPosition = newBulletPosition;
      this.rightPrice = bulletPrice;
    }
  }

  private getDifference(positionA: number, positionB: number): number {
    positionA = positionA - positionB;
    return positionA < 0 ? positionA * -1 : positionA;
  }

  mouseDownEvent(evnt: MouseEvent) {
    // TODO:
    // this.isMouseDownEvent = true;
    // const body = document.body as HTMLElement;
    // const range = document.getElementById('range') as HTMLDivElement;
    // const firtsRange = document.getElementById(id) as HTMLDivElement;
    // this.firstRangeSubscription = fromEvent(body, 'mousemove').pipe(
    //   map((event: MouseEvent) => event.pageX),
    //   ).subscribe(data => {
    //     if ((this.max * (((data - (range.offsetWidth - (range.offsetWidth * 1))) / 2) / 100) <= this.max) &&
    //     (this.max * (((data - (range.offsetWidth )) / 2) / 100) >= (this.min - (range.offsetWidth * 1))) && this.isMouseDownEvent) {
    //       firtsRange.style.left = (data - Number(range.offsetWidth)) + 'px';
    //     }
    // });
  }

  // mouseUpEvent(evnt: any, id: string) {
  //   this.isMouseDownEvent = false;
  // }

  public get leftBulletPosition(): number {
    const position = this.leftBullet.style.left.replace('px', '');
    return Number(position);
  }

  public set leftBulletPosition(v: number) {
    this.leftBullet.style.left = String(v) + 'px';
  }

  public get rightBulletPosition(): number {
    const position = this.rightBullet.style.left.replace('px', '');
    return Number(position);
  }

  public set rightBulletPosition(v: number) {
    this.rightBullet.style.left = String(v) + 'px';
  }

}
