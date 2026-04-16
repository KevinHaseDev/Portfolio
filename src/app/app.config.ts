import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { LanguageService } from './services/language.service';

function initializeLanguageService(languageService: LanguageService): () => Promise<void> {
  return async () => {
    await languageService.initializeTranslations();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeLanguageService,
      deps: [LanguageService],
      multi: true
    }
  ]
};
