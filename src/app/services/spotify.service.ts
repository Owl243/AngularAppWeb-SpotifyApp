import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { ArtistaComponent } from '../components/artista/artista.component';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient ) {
    console.log('spotify service listo')
   }

   getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDPCcs2942ll3B7Xh4vWZ2p1FAWD4jf_O2dgDB4kj4DElAjgG1oUlyowMnCOg4B7cPqRQqAPJFDtemm8M8cuPhVLeyBRkEJE_Qsa3kKeU4Tp8C08xZ7'
    });
    return this.http.get(url,{headers});
   }

   getNewReleases(){
    return this.getQuery('browse/new-releases')
    .pipe(map((data:any) => data['albums'].items));
    }

   getArtistas(termino :string){
     return this.getQuery(`search?q=${termino}  &type=artist`)
    .pipe(map((data:any) =>data['artists'].items));
   }

   getArtista(id :string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id :string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
   .pipe(map((data:any) =>data['tracks']));
  }
}
