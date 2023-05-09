import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  artista : any = {};
  loading: boolean;
  topTracks: any [] = [];

constructor(private router: ActivatedRoute,
            private sportiy: SpotifyService){
              this.loading = true;
  this.router.params.subscribe(params =>{
    this.getArtista(params['id']);
    this.getTopTracks(params['id']);
    });
}
getArtista(id: string){
  this.sportiy.getArtista(id)
  .subscribe(artista =>{
    //console.log(artista);
    this.artista= artista;
    this.loading = false;
  } );
}
getTopTracks(id: string){
  this.sportiy.getTopTracks(id)
  .subscribe(topTracksD=>{
  this.topTracks = topTracksD;
    console.log(topTracksD);
  } );
}
}
