import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/service/anime.service';

@Component({
  selector: 'app-watch-anime',
  templateUrl: './watch-anime.page.html',
  styleUrls: ['./watch-anime.page.scss'],
})
export class WatchAnimePage implements OnInit {

  data:any =[]
nombres:any=[]


  constructor( 
    private anime: AnimeService

    ) {}

ngOnInit(): void {

  this.anime.getAnime('recent-release').subscribe(data=>{
    this.data=Object.values(data)

   
    
    console.log(this.data)

  })


}
}
