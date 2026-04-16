import { Component, computed, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AppLanguage, LanguageService } from '../../services/language.service';

type FooterContent = {
  role: string;
  location: string;
  emailLinkLabel: string;
  legalNoticeLinkLabel: string;
};

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  private languageService = inject(LanguageService);

  private contentByLanguage: Record<AppLanguage, FooterContent> = {
    en: {
      role: 'Web Developer',
      location: 'Thuringia, Germany',
      emailLinkLabel: 'Email',
      legalNoticeLinkLabel: 'Legal Notice'
    },
    de: {
      role: 'Webentwickler',
      location: 'Thüringen, Deutschland',
      emailLinkLabel: 'E-Mail',
      legalNoticeLinkLabel: 'Impressum'
    }
  };

  content = computed(() => {
    let currentLanguage = this.languageService.currentLanguage();
    return this.contentByLanguage[currentLanguage];
  });
}
