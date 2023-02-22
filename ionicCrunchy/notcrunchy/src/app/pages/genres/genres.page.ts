import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/service/anime.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {
  idGenre: any;
  arrayGenre: any = [];
  id: any;

  constructor(private anime: AnimeService, private navCtrl:NavController, private router:Router) {}

  ngOnInit() {
    this.idGenre = localStorage.getItem('genre');

    this.anime.getAnime(`genre/${this.idGenre}`).subscribe((data) => {
      this.arrayGenre = data;

      console.log(this.arrayGenre);
    });
  }

  getId(id:string){
    console.log(this.arrayGenre)
    localStorage.setItem('idAnime',id)
    this.navCtrl.navigateForward(['/info',{animeId:id}])
   
    
  }

}
