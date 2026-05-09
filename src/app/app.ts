import { DOCUMENT, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { AppLanguage, LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  private viewportScroller = inject(ViewportScroller);
  private languageService = inject(LanguageService);
  private document = inject(DOCUMENT);
  protected readonly title = signal('Portfolio');

  constructor() {
    effect(() => {
      let language = this.languageService.currentLanguage();
      this.applyLanguageMetadata(language);
    });
  }

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

  private applyLanguageMetadata(language: AppLanguage): void {
    if (!this.document?.body || !this.document?.documentElement) {
      return;
    }
    this.document.body.classList.remove('language-en', 'language-de');
    this.document.body.classList.add(`language-${language}`);
    this.document.documentElement.lang = language;
  }
}
