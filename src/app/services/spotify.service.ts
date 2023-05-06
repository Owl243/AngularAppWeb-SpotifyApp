import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

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
      'Authorization':'Bearer BQACTGT-zUWaATRYWZzPIO_R2XN_c6resuLW0NHxp1FCjBVs1TWlSJc_z0l5Lc2BMqpD_5NErKKScwcrx6TfQaVXJX2DZY5-gz8IpZTzKgJxQGdg-NrA'
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
}
