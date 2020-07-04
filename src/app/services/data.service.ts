import { Injectable } from '@angular/core';
import { User, Itema } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  saveItem(model: User) {
    throw new Error("Method not implemented.");
  }

  userList: User[] = [];
  userItem: Itema[] = [];

  constructor() { 
    //create default user info
    var admin = new User();
    admin.userName = "Admin";
    admin.firstName = "First";
    admin.lastName = "Last";
    admin.password = "qwerty";

    this.userList.push(admin);

  }

  saveUser(user){
    this.userList.push(user);
    
  }
  saveItema(itema){
    this.userItem.push(itema);
  }
}
