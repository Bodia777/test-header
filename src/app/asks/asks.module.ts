import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsksRoutingModule } from './asks-routing.module';
import { Ask1Component } from './ask1/ask1.component';
import { Ask2Component } from './ask2/ask2.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [Ask1Component, Ask2Component],
  imports: [
    CommonModule,
    AsksRoutingModule,
    SharedModule
  ]
})
export class AsksModule { }
