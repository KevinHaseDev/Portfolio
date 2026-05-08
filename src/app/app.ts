import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  private viewportScroller = inject(ViewportScroller);
  protected readonly title = signal('Portfolio');

  ngAfterViewInit(): void {
    this.viewportScroller.setOffset(() => [0, this.getAnchorOffset()]);
  }

  private getAnchorOffset(): number {
    if (typeof document === 'undefined') {
      return 120;
    }
    let headerElement = document.querySelector('app-header .wrapper') as HTMLElement | null;
    if (!headerElement) {
      return 120;
    }
    return Math.ceil(headerElement.getBoundingClientRect().height + 16);
  }
}
