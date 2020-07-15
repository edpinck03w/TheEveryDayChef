import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})

export class UserRegisterComponent implements OnInit {


  model = new User();
  retypePass = '';
  alertVisible = false;

  constructor( private data: DataService, private router : Router) { 
    
  }

  ngOnInit() {
    console.log('user register ngOnInit');
  }

  isDataCorrect(){
    return this.model.userName && this.model.email && this.model.password && this.model.password == this.retypePass;
  }

  save(){
    console.log('saving', this.model);

    this.data.saveUser(this.model);

    // clear the form
    this.model = new User(); // reinitialize the object in the memory
    this.retypePass = '';

    this.alertVisible = true;
    setTimeout(() => this.alertVisible = false, 2000);
    
  }
  
  login(){
    //travel the list of users
    //compare each user credentials with values from the form

            
        this.router.navigate(['/login']);
    
    }
 
}
