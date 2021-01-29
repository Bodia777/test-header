import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { Favorite1Component } from './favorite1/favorite1.component';
import { Favorite2Component } from './favorite2/favorite2.component';


@NgModule({
  declarations: [Favorite1Component, Favorite2Component],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ]
})
export class FavoritesModule { }
