import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  model = new Menu();
  retypePass = '';
  alertVisible = false;

  constructor( private data: DataService, private router : Router) { 
    
  }

  ngOnInit() {
    console.log('user register ngOnInit');
  }

  
  save(){
    console.log('saving', this.model);

    this.data.saveMenu(this.model);

    // clear the form
    this.model = new Menu(); // reinitialize the object in the memory
    this.retypePass = '';

    this.alertVisible = true;
    setTimeout(() => this.alertVisible = false, 2000);
    
  }
  
 
}

