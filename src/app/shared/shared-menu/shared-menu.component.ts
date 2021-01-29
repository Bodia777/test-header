import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { SelectOption } from './shared-menu.interface';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'shared-link-menu',
  templateUrl: './shared-menu.component.html',
  styleUrls: ['./shared-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedMenuComponent implements OnInit {

  @Input() list$: Observable<SelectOption[]>;
  @Input() menuName$: Observable<string>;
  menuHeight: string;
  isMenuOpened = false;

  constructor(private detectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.list$
    .pipe(
      tap((list) => this.getMenuHeight(list)),
      take(1)
    )
    .subscribe()
  }

    getMenuHeight(list: SelectOption[]): void {
      const itemHeight = 36;
    this.menuHeight = `${itemHeight * (list.length + 1)}px`;
    this.detectorRef.detectChanges();
  }

  changeMenuStatus(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.detectorRef.detectChanges();
  }
  closeMenu(): void {
    this.isMenuOpened = false;
  }
}