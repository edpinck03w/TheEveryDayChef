import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  

  constructor(public shared: SharedService, private data: DataService) {
    
   }

  ngOnInit(): void {
  }
  
}
