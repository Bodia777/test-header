import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Visit1Component } from './visit1/visit1.component';
import { Visit2Component } from './visit2/visit2.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/visit1', pathMatch: 'full'
  },
  {
    path: 'visit1',
    component: Visit1Component
  },
  {
    path: 'visit2',
    component: Visit2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
