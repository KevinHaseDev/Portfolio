import { Component, computed, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AppLanguage, LanguageService } from '../../services/language.service';

type LandingPageContent = {
  roleTitle: string;
  checkWorkButton: string;
  contactButton: string;
  bannerItems: string[];
};

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {
  private languageService = inject(LanguageService);

  private contentByLanguage: Record<AppLanguage, LandingPageContent> = {
    en: {
      roleTitle: 'Frontend Developer',
      checkWorkButton: 'Check my work',
      contactButton: 'Contact me',
      bannerItems: [
        'Available for remote work',
        'Fullstack Developer',
        'Based in Thuringia',
        'Open to projects'
      ]
    },
    de: {
      roleTitle: 'Frontend Entwickler',
      checkWorkButton: 'Meine Projekte',
      contactButton: 'Kontakt aufnehmen',
      bannerItems: [
        'Verfügbar für Remote-Arbeit',
        'Fullstack Entwickler',
        'In Thüringen',
        'Offen für Projekte'
      ]
    }
  };

  content = computed(() => {
    let currentLanguage = this.languageService.currentLanguage();
    return this.contentByLanguage[currentLanguage];
  });

}
