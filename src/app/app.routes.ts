//importar routes
import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ArtistaComponent } from "./components/artista/artista.component";

 export const ROUTES:Routes=[
  //esta ruta lleva a home
  {path: 'home', component: HomeComponent},
  //esta ruta lleva a search
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component : ArtistaComponent},
  //estas rutas es por si llega a existir una ruta desconocida, lleve a home
  // '' siginifica que es una ruta vacia
  {path: '', pathMatch:'full', redirectTo: 'home'},
  //** significa cualquier otra ruta
  {path: '**', pathMatch:'full', redirectTo: 'home'},
 ]
