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

    var meala = new Meal ();
    meala.meatone = "BBQ Burger";
    meala.vegetarian = "lettuce";
    meala.sideone = "organic fries";
    meala.sidetwo = "asphagarus";
    meala.picture = "/assets/burger2.png";

    this.userMeal.push(meala);

    var mealb = new Meal ();
    mealb.meatone = "Sausage Pizza";
    mealb.vegetarian = "lettuce";
    mealb.sideone = "organic fries";
    mealb.sidetwo = "asphagarus";
    mealb.picture = "/assets/pizza.png";

    this.userMeal.push(mealb);

    var mealc = new Meal ();
    mealc.meatone = "Supreme Pizza";
    mealc.vegetarian = "lettuce";
    mealc.sideone = "organic fries";
    mealc.sidetwo = "asphagarus";
    mealc.picture = "/assets/pizza.png";

    this.userMeal.push(mealc);

    var meald = new Meal ();
    meald.meatone = "Pepporoni Pizza";
    meald.vegetarian = "lettuce";
    meald.sideone = "organic fries";
    meald.sidetwo = "asphagarus";
    meald.picture = "/assets/pizza.png";

    this.userMeal.push(meald);

    var meale = new Meal ();
    meale.meatone = "BBQ Steak Sandwaich";
    meale.vegetarian = "lettuce";
    meale.sideone = "organic fries";
    meale.sidetwo = "asphagarus";
    meale.picture = "/assets/sandwich.png";

    this.userMeal.push(meale);

    var mealf = new Meal ();
    mealf.meatone = "Philly Cheese Steak";
    mealf.vegetarian = "lettuce";
    mealf.sideone = "organic fries";
    mealf.sidetwo = "asphagarus";
    mealf.picture = "/assets/sandwich.png";

    this.userMeal.push(mealf);

    var mealg = new Meal ();
    mealg.meatone = "Steak and Cheese";
    mealg.vegetarian = "lettuce";
    mealg.sideone = "organic fries";
    mealg.sidetwo = "asphagarus";
    mealg.picture = "/assets/sandwich.png";

    this.userMeal.push(mealg);
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
