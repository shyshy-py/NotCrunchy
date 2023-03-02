import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimeService } from 'src/app/service/anime.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @ViewChild('menu') menu:any;
  
  search: string= '';
  isSearch:string='';
  
  animeSearch:any=[];
  url:string='';

  constructor(private navCtrl:NavController ,private anime:AnimeService) { }

  ngOnInit() {}


  goBack(){
    this.navCtrl.back()
    
  }
  openMenu() {
    this.menu.toggle('menu');
  }
  onEnter(id:string){
    

  this.anime.searchAnime(id).subscribe(data=>{
    this.animeSearch=data

    console.log(this.animeSearch)
    this.isSearch='true'

  })
  this.isSearch='notFound'
  
  }

  goToAnime(url:string){
    localStorage.setItem('idAnime',url)
    this.navCtrl.navigateForward(['/info',{animeId:url}])
  }

 


}
