import { Injectable, signal } from '@angular/core';

export type AppLanguage = 'en' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private storageKey = 'portfolio-language';
  private languageSignal = signal<AppLanguage>(this.readStoredLanguage());

  currentLanguage = this.languageSignal.asReadonly();

  setLanguage(language: AppLanguage): void {
    this.languageSignal.set(language);
    this.persistLanguage(language);
  }

  isGermanLanguageActive(): boolean {
    return this.languageSignal() === 'de';
  }

  private readStoredLanguage(): AppLanguage {
    if (typeof window === 'undefined') {
      return 'en';
    }
    let storedLanguage = window.localStorage.getItem(this.storageKey);
    if (storedLanguage === 'de') {
      return 'de';
    }
    return 'en';
  }

  private persistLanguage(language: AppLanguage): void {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(this.storageKey, language);
  }
}
