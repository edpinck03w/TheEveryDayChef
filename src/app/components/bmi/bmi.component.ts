import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of, fromEvent, Observable, merge, combineLatest } from 'rxjs';
import { tap, map, startWith, share, withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {
  @ViewChild('heightSlider') heightSlider: ElementRef;
  @ViewChild('heightField') heightField: ElementRef;
  @ViewChild('weightSlider') weightSlider: ElementRef;
  @ViewChild('weightField') weightField: ElementRef;

  heightSliderChanges$: Observable<Event>;
  heightFieldChanges$: Observable<Event>;
  heightValue$: Observable<number>;

  weightSliderChanges$: Observable<Event>;
  weightFieldChanges$: Observable<Event>;
  weightValue$: Observable<number>;

  bmi$: Observable<number>;
  bmiLegend$: Observable<any>;

  legend$: Observable<{ text: string }[]> = of([
    { text: 'Severe Thinness' },
    { text: 'Moderate Thinness' },
    { text: 'Mild Thinness' },
    { text: 'Normal' },
    { text: 'Overweight' },
    { text: 'Obese Class I' },
    { text: 'Obese Class II' },
    { text: 'Obese Class III' },
  ]);

  constructor( private router : Router,) {
    
   }

  legendColors$: Observable<string[]> = of([
    '#fff',
    '#fff',
    '#fff',
    '#f4ef9e',
    '#f7d899',
    '#eaa195',
    '#eaa195',
    '#eaa195',
  ]);

  ngOnInit() {
    this.heightSliderChanges$ = fromEvent(this.heightSlider.nativeElement, 'input');
    this.heightFieldChanges$ = fromEvent(this.heightField.nativeElement, 'input');

    this.heightValue$ = merge(
      this.heightSliderChanges$,
      this.heightFieldChanges$,
    ).pipe(
      map(e => +(<HTMLInputElement>e.target).value),
      share(), // share has to come before startwith
      startWith(180),
    );

    this.weightSliderChanges$ = fromEvent(this.weightSlider.nativeElement, 'input');
    this.weightFieldChanges$ = fromEvent(this.weightField.nativeElement, 'input');

    this.weightValue$ = merge(
      this.weightSliderChanges$,
      this.weightFieldChanges$,
    ).pipe(
      map(e => +(<HTMLInputElement>e.target).value),
      share(),
      startWith(80),
    );

    this.bmi$ = combineLatest(
      this.heightValue$,
      this.weightValue$,
    ).pipe(
      map(([h, w]) => this.computeBmi(h, w)),
    );

    this.bmiLegend$ = this.bmi$.pipe(
      map(bmi => this.bmiToIndex(bmi)),
      withLatestFrom(this.legend$),
      map(([index, legends]) => legends[index]),
    );
  }
  next(){
    
    // send the user to the register page
    this.router.navigate(['/converter']);
  }
back(){
    
    // send the user to the register page
    this.router.navigate(['/video-list']);
  } 

  private computeBmi(height: number, weight: number): number {
    const bmi = (weight / ((height / 100) * (height / 100)));
    return Number(bmi.toFixed(2));
  }

  private bmiToIndex(bmi: number): number {
    if (bmi < 16) {
      return 0;
    } else if (bmi < 17) {
      return 1;
    } else if (bmi < 18.5) {
      return 2;
    } else if (bmi < 25) {
      return 3;
    } else if (bmi < 30) {
      return 4;
    } else if (bmi < 35) {
      return 5;
    } else if (bmi < 40) {
      return 6;
    } else {
      return 7;
    }
  }
}