import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../service/anime.service';
import { LoadingController } from '@ionic/angular';

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

  idAnime: string = '';
  recent_anime: any[] = [];
  popular_anime: any[] = [];

  constructor( 
    private anime: AnimeService,
    private loadingController: LoadingController
  ) {}

  ngOnInit(): void {
    this.presentLoading(true);
    this.anime.getAnime('recent-release').subscribe(data => {
      this.recent_anime = Object.values(data);
      console.log(data);
      this.presentLoading(false);
    });
    this.presentLoading(true);

    this.anime.getAnime('popular').subscribe(data => {
      this.popular_anime = Object.values(data);
      this.presentLoading(false);
    });
  }
  
  

  async presentLoading(show: boolean) {
    console.log("presentLoading called with show=", show);
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    

    if (show) {
      await loading.present();
    } if(loading !== undefined) {
      await loading.dismiss();
    }
    
  }

  async infoAnime(id: string) {
    this.presentLoading(true);
    

    this.anime.getAnime(`search?keyw=${id}`).subscribe(
      data => {
        console.log(data);
        
        this.presentLoading(false);
       
      },
      error => {
        console.log(error);
       
        
      }
    );
  }
}