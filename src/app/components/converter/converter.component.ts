import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  farenheit = 0.0;
  celcius = 0.0;

  constructor( private router : Router,) {
    
   }

  ngOnInit(): void {
  }
  next(){
    
    // send the user to the register page
    this.router.navigate(['/menu']);
  }
  back(){
    
    // send the user to the register page
    this.router.navigate(['/bmi']);
  } 

  convertToC(){
        // (100°F − 32) × 5/9 = 37.778°C
   this.celcius = (this.farenheit - 32) * 5/9;
  }

  convertToF(){
    //(40°C × 9/5) + 32 = 104°F
    this.farenheit = (this.celcius * 9/5) + 32;
  }


}
