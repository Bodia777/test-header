import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SharedMenuComponent } from './shared-menu/shared-menu.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from './shared.module-translate.config';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SharedMenuComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
  ],
  exports: [
    SharedMenuComponent,
    MaterialModule,
    TranslateModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class SharedModule { }
