import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/service/anime.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  animeId:any;

  selectAnime:any=[];
/*valores lista anime desde api
0=nombre anime
1=temporada(verano,invierno)
2=anio
3=estado (en emision)
4={genero}

5=nombre en jp
6=descripcion en eng
7= src imagen
8=n episodio
9={episodios,link episodios}
*/
  mostrarInfo = false;
  nameAnime:any;
  pageLoaded = false;

  constructor(
    private anime: AnimeService,
    private location: Location,
    private router: Router,
    private navCtrl:NavController
  ) {
    
   }

   ngOnInit() {

    this.animeId=localStorage.getItem('idAnime')

    this.anime.getAnime(`anime-details/${this.animeId}`).subscribe(data=>{
      this.selectAnime=Object.values(data)
      console.log('data info')
      console.log(this.selectAnime)
    });
  }

  ionViewDidEnter() {
   
  }

  ionViewWillLeave() {
    this.navCtrl.navigateForward
  }

  verInfo() {
    this.mostrarInfo = !this.mostrarInfo;
  }
}