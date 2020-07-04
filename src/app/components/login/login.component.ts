import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName = '';
  firstName = '';
  lastName = '';
  password = '';
  allUsers = [];
  loginError = false;

  constructor( private data: DataService, private router : Router, private shared: SharedService) { 
    //get all users
    this.allUsers = data.userList;
  }

  ngOnInit(): void {
  }

  login(){
    //travel the list of users
    //compare each user credentials with values from the form

    var found = false;

    for(let i=0; i < this.allUsers.length; i++){
      var user = this.allUsers[i];
      if(user.userName.toLowerCase() == this.userName.toLowerCase() && user.firstName.toLowerCase() == this.firstName.toLowerCase() && user.lastName.toLowerCase() == this.lastName.toLowerCase() && user.password == this.password){
        console.log("Logged in correctly");
        found = true;
        this.loginError = false;

        //show tabs based on registered user or not
        this.shared.isUserLoggedIn = true;
        this.shared.userName = user.userName;

        // send the user to the register page
        this.router.navigate(['/user/register']);
      }
    }

    if(!found){
      console.error("Wrong credentials!!!");
      this.loginError = true;
      setTimeout(() => this.loginError = false, 4000);
    }
    

  }

}
