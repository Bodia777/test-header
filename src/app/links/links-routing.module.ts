import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/link1', pathMatch: 'full'
  },
  {
    path: 'link1',
    component: Link1Component
  },
  {
    path: 'link2',
    component: Link2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }
