import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage1',
  templateUrl: './adminpage1.component.html',
  styleUrls: ['./adminpage1.component.scss']
})
export class Adminpage1Component implements OnInit {

  model = new Meal();
  retypePass = '';
  alertVisible = false;

  constructor( private data: DataService, private router : Router) { 
    
  }

  ngOnInit() {
    console.log('user meal ngOnInit');
  }

 
  save(){
    console.log('saving', this.model);

    this.data.saveMeal(this.model);

    // clear the form
    this.model = new Meal(); // reinitialize the object in the memory
    this.retypePass = '';

    this.alertVisible = true;
    setTimeout(() => this.alertVisible = false, 2000);
    
  }
  
  

}
