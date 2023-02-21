import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/service/anime.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-watch-anime',
  templateUrl: './watch-anime.page.html',
  styleUrls: ['./watch-anime.page.scss'],
})
export class WatchAnimePage implements OnInit {
  data: any = [];
  genres: any = [
    'action',
    'adventure',
    'cars',
    'comedy',
    'crime',
    'dementia',
    'demons',
    'drama',
    'dub',
    'ecchi',
    'family',
    'fantasy',
    'game',
    'gourmet',
    'harem',
    'historical',
    'horror',
    'josei',
    'kids',
    'magic',
    'martial-arts',
    'mecha',
    'military',
    'music',
    'mystery',
    'parody',
    'police',
    'psychological',
    'romance',
    'samurai',
    'school',
    'sci-fi',
    'seinen',
    'shoujo',
    'shoujo-ai',
    'shounen',
    'shounen-ai',
    'slice-of-Life',
    'space',
    'sports',
    'super-power',
    'supernatural',
    'suspense',
    'thriller',
    'vampire',
    'yaoi',
    'yuri',
  ];
  
  

  constructor(private anime: AnimeService) {}

  ngOnInit(): void {
    this.anime.getAnime('recent-release').subscribe((data) => {
      this.data = Object.values(data);

      console.log(this.data);
    });
  }


setItem(text:string){
  localStorage.setItem('genre',text)

}






  
}
