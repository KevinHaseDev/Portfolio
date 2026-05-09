import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type LegalNoticeContent = {
  pageTitle: string;
  imprintTitle: string;
  locationText: string;
  emailLabel: string;
  inquiryText: string;
  dateLabel: string;
};

@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
  private languageService = inject(LanguageService);

  content = computed(() => {
    return this.languageService.getTranslationByLanguage<LegalNoticeContent>('legalNotice');
  });

}
