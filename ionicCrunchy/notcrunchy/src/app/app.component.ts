import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isPage: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if ( router.url==='/info') {
        this.isPage = true;
      } else {
        this.isPage = false;
      }
    });


    



  }
  ngOnInit(): void {
    console.log(location.href)
  }
}
