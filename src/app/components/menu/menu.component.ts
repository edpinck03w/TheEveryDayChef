import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  model = new Meal();
  allMeal: Meal []=[];
  alertVisible = false;

  constructor( private data: DataService) {
    this.allMeal = data.userMeal;
    console.log(data.userMeal);
   }

  ngOnInit(): void {
  }

}
