import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ask1Component} from './ask1/ask1.component';
import { Ask2Component} from './ask2/ask2.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/ask1', pathMatch: 'full'
  },
  {
    path: 'ask1',
    component: Ask1Component
  },
  {
    path: 'ask2',
    component: Ask2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsksRoutingModule { }
