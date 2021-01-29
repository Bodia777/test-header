import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tag1Component } from './tag1/tag1.component';
import { Tag2Component } from './tag2/tag2.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/tag1', pathMatch: 'full'
  },
  {
    path: 'tag1',
    component: Tag1Component
  },
  {
    path: 'tag2',
    component: Tag2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
