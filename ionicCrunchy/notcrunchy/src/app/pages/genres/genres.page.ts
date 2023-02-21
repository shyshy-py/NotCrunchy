import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/service/anime.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {

  idGenre:any
  arrayGenre:any= []

  constructor(private anime:AnimeService) { }

  ngOnInit() {
    this.idGenre=localStorage.getItem('genre')

    this.anime.getAnime(`genre/${this.idGenre}`).subscribe(data=>{
     this.arrayGenre=data
     console.log(this.arrayGenre)

    })


  }

}
