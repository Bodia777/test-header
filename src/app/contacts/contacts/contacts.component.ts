import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  linkMenu$ = of('menu1');
  linkList$ = of([{name: '1'}, {name: '2'}])

  constructor() { }

  ngOnInit(): void {
  }

}
