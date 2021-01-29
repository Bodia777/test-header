import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { VisitsRoutingModule } from './visits-routing.module';
import { Visit1Component } from './visit1/visit1.component';
import { Visit2Component } from './visit2/visit2.component';


@NgModule({
  declarations: [Visit1Component, Visit2Component],
  imports: [
    CommonModule,
    VisitsRoutingModule,
    SharedModule
  ]
})
export class VisitsModule { }
