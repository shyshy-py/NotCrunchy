import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoPage } from './pages/info/info.page';
import { WatchAnimePage } from './pages/watch-anime/watch-anime.page';

const routes: Routes = [

{path: 'watch-anime', component:WatchAnimePage},

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'watch-anime',
    loadChildren: () => import('./pages/watch-anime/watch-anime.module').then( m => m.WatchAnimePageModule)
  },
  {
    path: 'info',component:InfoPage
  },
  {
    path: 'watch-anime/genres',
    loadChildren: () => import('./pages/genres/genres.module').then( m => m.GenresPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }