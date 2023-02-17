import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  slideOpts={
    slidesPerView: 2,
    spaceBetween: 10,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  }
}

recent_anime:any=[]
  constructor( 
    private anime: AnimeService
    ) {}

ngOnInit(): void {

  this.anime.getAnime('recent-release').subscribe(data=>{

    this.recent_anime=Object.values(data)

    console.log(data)

  });


}


 
// Using the example ID of "call-of-the-night-2234".

}


 



