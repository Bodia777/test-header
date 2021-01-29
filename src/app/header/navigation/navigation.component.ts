import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild, Renderer2, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { pluck, delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {

  @ViewChild('navigation') navigation: ElementRef;
  @ViewChild('navigationBig') navigationBig: ElementRef;
  @Output() openSearchInputEmitter = new EventEmitter<void>();

  linkMenu$: Observable<string>;
  linkList$: Observable<string>;
  tagsMenu$: Observable<string>;
  tagsList$: Observable<string>;
  asksMenu$: Observable<string>;
  asksList$: Observable<string>;
  visitsMenu$: Observable<string>;
  visitsList$: Observable<string>;
  favoritesMenu$: Observable<string>;
  favoritesList$: Observable<string>;
  isNavigationBigDisplayBlock = false;


  constructor(private translateService: TranslateService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.linkMenu$ = this.translateService.getTranslation(environment.defaultLocale)
    .pipe(pluck('appModule', 'headerComponent', 'menuNameLinks'));
    this.linkList$ = this.translateService.getTranslation(environment.defaultLocale)
    .pipe(pluck('appModule', 'headerComponent', 'menuOptionsinks'));
    this.tagsMenu$ = this.translateService.getTranslation(environment.defaultLocale)
    .pipe(pluck('appModule', 'headerComponent', 'tags', 'tagsName'));
    this.tagsList$ = this.translateService.getTranslation(environment.defaultLocale)
    .pipe(pluck('appModule', 'headerComponent', 'tags', 'tagsOptions'));
    this.asksMenu$ = this.translateService.getTranslation(environment.defaultLocale)
    .pipe(pluck('appModule', 'headerComponent', 'asks', 'asksName'));
    this.asksList$ = this.translateService.getTranslation(environment.defaultLocale)
    .pipe(pluck('appModule', 'headerComponent', 'asks', 'asksOptions'));
    this.visitsMenu$ = this.translateService.getTranslation(environment.defaultLocale)
    .pipe(pluck('appModule', 'headerComponent', 'visits', 'visitsName'));
    this.visitsList$ = this.translateService.getTranslation(environment.defaultLocale)
    .pipe(pluck('appModule', 'headerComponent', 'visits', 'visitsOptions'));
    this.favoritesMenu$ = this.translateService.getTranslation(environment.defaultLocale)
    .pipe(pluck('appModule', 'headerComponent', 'favorites', 'favoritesName'));
    this.favoritesList$ = this.translateService.getTranslation(environment.defaultLocale)
    .pipe(pluck('appModule', 'headerComponent', 'favorites', 'favoritesOptions'));
  }

  hideNavigation(): void {
    this.navigation.nativeElement.classList.add('with_remove');
    this.openSearchInputEmitter.emit();
    of(null)
    .pipe(delay(500),
    tap(() => {
      this.navigation.nativeElement.classList.remove('with_show');
    })
    )
    .subscribe()
    
  }
  openNavigation(): void {
    if (this.navigation.nativeElement.classList.contains('with_remove')) {
    this.navigation.nativeElement.classList.add('with_show');
    of(null)
    .pipe(delay(500),
    tap(() => {
      this.navigation.nativeElement.classList.remove('with_remove');
    })
    )
    .subscribe()
  }
}

togleNavigationBig() {
  if (this.isNavigationBigDisplayBlock) {
    this.renderer.setStyle(this.navigationBig.nativeElement, 'display', 'none');
  } else {
    this.renderer.setStyle(this.navigationBig.nativeElement, 'display', 'block');
  }
  this.isNavigationBigDisplayBlock = !this.isNavigationBigDisplayBlock;
   }
}
