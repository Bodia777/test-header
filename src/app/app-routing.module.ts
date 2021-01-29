import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'links',  loadChildren : () => import('./links/links.module').then(m => m.LinksModule)},
  {path: 'contacts',  loadChildren : () => import('./contacts/contacts.module').then(m => m.ContactsModule)},
  {path: 'tags',  loadChildren : () => import('./tags/tags.module').then(m => m.TagsModule)},
  {path: 'asks',  loadChildren : () => import('./asks/asks.module').then(m => m.AsksModule)},
  {path: 'favorites',  loadChildren : () => import('./favorites/favorites.module').then(m => m.FavoritesModule)},
  {path: 'visits',  loadChildren : () => import('./visits/visits.module').then(m => m.VisitsModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes,  
    {preloadingStrategy: PreloadAllModules}
    )],
  exports: [RouterModule]
})


export class AppRoutingModule { }