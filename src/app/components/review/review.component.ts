import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  model = new Menu();
  allMenu: Menu []=[];
  alertVisible = false;

  constructor( private data: DataService, private router : Router,) {
    this.allMenu = data.userMenu;
    console.log(data.userMenu);
   }

  ngOnInit(): void {
  }
  next(){
    
    // send the user to the register page
    this.router.navigate(['/pay']);
  }
  back(){
    
    // send the user to the register page
    this.router.navigate(['/todo']);
  }  
}
