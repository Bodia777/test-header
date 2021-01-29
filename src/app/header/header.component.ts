import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { of, pipe } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';
import { NavigationComponent } from './navigation/navigation.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  @ViewChild('navigationMenu') navigationMenu: NavigationComponent;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('searchPopup') searchPopup: ElementRef;


  constructor (private renderer: Renderer2) {}

  ngOnInit(): void{}
  showNavigation() {
    this.navigationMenu.openNavigation();
    this.renderer.setStyle(this.searchPopup.nativeElement, 'display', 'none');
  }
  openHeaderPopup() {
    of(null)
    .pipe(delay(700),
    tap(() => {
      this.searchInput.nativeElement.focus();
      this.renderer.setStyle(this.searchPopup.nativeElement, 'display', 'block')
    }))
    .subscribe()
  }
}
