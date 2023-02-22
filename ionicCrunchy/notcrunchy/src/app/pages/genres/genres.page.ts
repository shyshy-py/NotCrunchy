import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/service/anime.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {
  idGenre: any;
  arrayGenre: any = [];
  id: any;

  constructor(private loadingController:LoadingController,private anime: AnimeService, private navCtrl:NavController, private router:Router) {}

  ngOnInit() {
    this.presentLoading(true)
    this.idGenre = localStorage.getItem('genre');

    this.anime.getAnime(`genre/${this.idGenre}`).subscribe((data) => {
      this.arrayGenre = data;

      console.log(this.arrayGenre);
    });
    
  }

  ionViewWillEnter(){
    this.presentLoading(false)
  }

  getId(id:string){
    this.presentLoading(true)
    console.log(this.arrayGenre)
    localStorage.setItem('idAnime',id)
    this.navCtrl.navigateForward(['/info',{animeId:id}])
   this.presentLoading(false)
    
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

}


