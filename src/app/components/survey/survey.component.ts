import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  constructor(private router : Router,) { }

  ngOnInit(): void {
  }
  next(){
    
    // send the user to the register page
    this.router.navigate(['/contact']);
  }
  back(){
    
    // send the user to the register page
    this.router.navigate(['/pay']);
  } 
}
