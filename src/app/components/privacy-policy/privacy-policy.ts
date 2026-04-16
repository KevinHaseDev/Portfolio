import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type PrivacyPolicyContent = {
  pageTitle: string;
  controllerTitle: string;
  controllerText: string;
  dataTitle: string;
  dataText: string;
  contactFormTitle: string;
  contactFormText: string;
  purposeTitle: string;
  purposeText: string;
  storageTitle: string;
  storageText: string;
  rightsTitle: string;
  rightsItems: string[];
  requestContactTitle: string;
  requestContactText: string;
  lastUpdateLabel: string;
};

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {
  private languageService = inject(LanguageService);

  content = computed(() => {
    return this.languageService.getTranslationByLanguage<PrivacyPolicyContent>('privacyPolicy');
  });

}
