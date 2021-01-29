import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { Tag1Component } from './tag1/tag1.component';
import { Tag2Component } from './tag2/tag2.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [Tag1Component, Tag2Component],
  imports: [
    CommonModule,
    TagsRoutingModule,
    SharedModule
  ]
})
export class TagsModule { }
