import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  title = "View Our Custom Chefs in Action";
  someItem = "<h1>Hi There</h1>"
  //videoList = ["Item 1", "Item 2"]
  videoList = [
    {name: "Item 1",
     slug: "item-1",
     embed: `6wD4V0rvlDI`,  
    },
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
