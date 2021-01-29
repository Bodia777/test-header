import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [Link1Component, Link2Component],
  imports: [
    CommonModule,
    LinksRoutingModule,
    SharedModule
  ]
})
export class LinksModule { }
