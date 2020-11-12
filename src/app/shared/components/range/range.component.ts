import { Component, Input, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'ngc-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  @Input() min = 0;
  @Input() max = 0;

  firstRangeSubscription: Subscription = null;
  clickRange$: any;
  firstRangeValue: any = '0px';
  lastRangeValue: any = '50px';

  isMouseDownEvent: boolean;
  filterValue:number = 0;

  constructor() { }

  ngOnInit(): void {
    const body = document.body as HTMLElement;
    const range = document.getElementById('range') as HTMLDivElement;
    const firtsRange = document.getElementById('first-range-point') as HTMLDivElement;
    this.firstRangeSubscription = fromEvent(range, 'mousedown').pipe(
      map((event: MouseEvent) => {
        let valueX = event.pageX;
        valueX = valueX >= range.offsetWidth ? range.offsetWidth : valueX;
        valueX = valueX < 0 ? 0 : valueX;
        return valueX;
      }),
      tap(data => console.log('data:  ', data, ' range: ', range.offsetWidth, ' firtsRange: ', firtsRange.offsetWidth))
      ).subscribe(data => {
        if ( data >= 0 && data <= range.offsetWidth ) {
          const value = this.max * ((data / 2) / 100);
          this.filterValue = value >= this.max ? this.max : value;
          firtsRange.style.left = data - Number(firtsRange.offsetWidth) + 'px';
        }
    });
  }

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
