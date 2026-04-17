import { Component, computed, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageService } from '../../services/language.service';

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
  styleUrls: ['./landing-page.scss']
})
export class LandingPage {
  private languageService = inject(LanguageService);

  content = computed(() => {
    return this.languageService.getTranslationByLanguage<LandingPageContent>('landingPage');
  });

}
