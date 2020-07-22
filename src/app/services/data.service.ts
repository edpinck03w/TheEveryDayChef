import { Injectable } from '@angular/core';
import { User, Itema, Menu, Meal } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  saveItem(model: User) {
    throw new Error("Method not implemented.");
  }

  userList: User[] = [];
  userItem: Itema[] = [];
  userMenu: Menu [] = [];
  userMeal: Meal [] = [];

  constructor() { 
    //create default user info
    var admin = new User();
    admin.userName = "Admin";
    admin.firstName = "First";
    admin.lastName = "Last";
    admin.password = "qwerty";

    this.userList.push(admin);

    var meala = new Meal ();
    meala.meatone = "BBQ Burger";
    meala.vegetarian = "lettuce";
    meala.sideone = "organic fries";
    meala.sidetwo = "asphagarus";
    meala.picture = "/assets/burger2.png";

    this.userMeal.push(meala);
  }

  saveUser(user){
    this.userList.push(user);
    
  }
  saveItema(itema){
    this.userItem.push(itema);
  }
  saveMenu(menu){
    this.userMenu.push(menu);
  }
  saveMeal(meal){
    this.userMeal.push(meal);
  }
}
