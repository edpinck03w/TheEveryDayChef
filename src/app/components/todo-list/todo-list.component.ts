import { Component, OnInit } from '@angular/core';
import { User, Itema } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  model = new Itema();
  allItems: Itema []=[];
  alertVisible = false;

  constructor( private data: DataService, private router : Router,) {
    this.allItems = data.userItem;
    console.log(data.userItem);
   }

  ngOnInit() {
    console.log('user registered item');
  }

  next(){
    
    // send the user to the register page
    this.router.navigate(['/review']);
  }
back(){
    
    // send the user to the register page
    this.router.navigate(['/order']);
  } 

  save(){
    console.log('saving', this.model);

    this.data.saveItema(this.model);

    // clear the form
    this.model = new Itema(); // reinitialize the object in the memory
    
    this.alertVisible = true;
    setTimeout(() => this.alertVisible = false, 2000);

  }
}
