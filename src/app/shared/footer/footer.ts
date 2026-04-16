import { Component, computed, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageService } from '../../services/language.service';

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

  content = computed(() => {
    return this.languageService.getTranslationByLanguage<FooterContent>('footer');
  });
}
