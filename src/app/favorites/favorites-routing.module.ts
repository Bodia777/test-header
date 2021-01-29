import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Favorite1Component } from './favorite1/favorite1.component';
import { Favorite2Component } from './favorite2/favorite2.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/favorite1', pathMatch: 'full'
  },
  {
    path: 'favorite1',
    component: Favorite1Component
  },
  {
    path: 'favorite2',
    component: Favorite2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
