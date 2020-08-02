import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  title = "Select Your Personal Chef to Get Started";
  someItem = "<h2>Available Chef</h2>"
  //videoList = ["Item 1", "Item 2"]
  videoList = [
    {name: "Chef Babish",
     slug: "item-1",
     embed: `zQm9Bk2bA_Q`,  
    },
    {name: "Chef Sarah",
     slug: "item-2",
     embed: `S9ZQZQ6KwIM` 
    },
    {name: "Chef David",
     slug: "item-3",
     embed: `0nK1trRuq7c`,  
    },
    {name: "Chef Erica",
     slug: "item-4",
     embed: `4k58RsQHTuE` 
    },
    {name: "Chef Lisa",
    slug: "item-5",
    embed: `vmdITEguAnE`,  
   },
   {name: "Chef Dimple",
    slug: "item-6",
    embed: `NOgPQvUWfHk` 
   },
   {name: "Chef Naomi",
    slug: "item-7",
    embed: `60yQ5l9zed4`,  
   },
   {name: "Chef Joe",
    slug: "item-8",
    embed: `AI97A0E9fPs` 
   },
  ]
  constructor(private sanitizer: DomSanitizer, private router : Router) { }

  ngOnInit(): void {
  }
  login(){
    
    // send the user to the register page
    this.router.navigate(['/bmi']);
  }
  next(){
    
    // send the user to the register page
    this.router.navigate(['/bmi']);
  }
  back(){
    
    // send the user to the register page
    this.router.navigate(['/video-list']);
  }
  getEmbedURL(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed)
  }
}
