import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  url='https://gogoanime.consumet.stream'

  constructor(private http:HttpClient) {}

  
  getAnime(id:string){
    return this.http.get(`${this.url}/${id}`)
  }

  searchAnime(id:string){
    return this.http.get(`${this.url}/search?keyw=${id}`)
  }
  
}

  

