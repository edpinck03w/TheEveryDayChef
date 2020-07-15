import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit{
  title = "View One of Our EveryDayChefs in Action";
  someItem = "25% Discount First Time Buyers"
  //videoList = ["Item 1", "Item 2"]
  videoList = [
    {name: "Item 2",
     slug: "item-2",
     embed: `S9ZQZQ6KwIM` 
    },
  ]
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  getEmbedURL(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed)
  }
}