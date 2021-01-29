import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }
