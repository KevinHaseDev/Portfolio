import { Component, computed, inject } from '@angular/core';
import { AppLanguage, LanguageService } from '../../services/language.service';

type LegalNoticeContent = {
  pageTitle: string;
  imprintTitle: string;
  locationText: string;
  emailLabel: string;
  acceptanceTitle: string;
  acceptanceText: string;
  scopeTitle: string;
  scopeText: string;
  rightsTitle: string;
  rightsText: string;
  useTitle: string;
  useText: string;
  disclaimerTitle: string;
  disclaimerText: string;
  indemnityTitle: string;
  indemnityText: string;
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

  private contentByLanguage: Record<AppLanguage, LegalNoticeContent> = {
    en: {
      pageTitle: 'Legal Notice',
      imprintTitle: 'Imprint',
      locationText: 'Thuringia, Germany',
      emailLabel: 'Email',
      acceptanceTitle: 'Acceptance of Terms',
      acceptanceText: 'By accessing and using this portfolio, you acknowledge and agree to the following terms and conditions. These terms may be updated from time to time without prior notice.',
      scopeTitle: 'Scope and Ownership of the Product',
      scopeText: 'This portfolio is presented for professional showcase purposes. All design, code snippets, and written content are part of a personal web presence unless otherwise stated.',
      rightsTitle: 'Proprietary Rights',
      rightsText: 'The overall design and structure are protected by intellectual property rights. Unauthorized reuse, duplication, or redistribution of content is not permitted.',
      useTitle: 'Use of the Product',
      useText: 'You may use this website only for lawful purposes. Any attempt to damage, manipulate, or misuse the site or contact channels is strictly prohibited.',
      disclaimerTitle: 'Disclaimer and Limitation of Liability',
      disclaimerText: 'This portfolio is provided as is, without warranties of any kind. No liability is assumed for external links, third-party services, or incidental damages resulting from the use of this website.',
      indemnityTitle: 'Indemnity',
      indemnityText: 'You agree to indemnify and hold harmless the site owner against claims, damages, or legal costs arising from misuse of this website or violation of these terms.',
      inquiryText: 'For legal inquiries, please contact',
      dateLabel: 'Date: April 16, 2026'
    },
    de: {
      pageTitle: 'Impressum',
      imprintTitle: 'Anbieterkennzeichnung',
      locationText: 'Thüringen, Deutschland',
      emailLabel: 'E-Mail',
      acceptanceTitle: 'Geltung der Bedingungen',
      acceptanceText: 'Mit dem Zugriff auf dieses Portfolio bestätigst du die folgenden Bedingungen. Diese Bedingungen können jederzeit ohne gesonderte Vorankündigung aktualisiert werden.',
      scopeTitle: 'Zweck und Eigentum am Produkt',
      scopeText: 'Dieses Portfolio dient ausschließlich der professionellen Darstellung. Design, Codebeispiele und Inhalte sind Teil einer persönlichen Webpräsenz, sofern nicht anders gekennzeichnet.',
      rightsTitle: 'Schutzrechte',
      rightsText: 'Gestaltung und Struktur unterliegen dem Schutz geistiger Eigentumsrechte. Eine unbefugte Wiederverwendung, Vervielfältigung oder Weitergabe der Inhalte ist nicht gestattet.',
      useTitle: 'Nutzung des Produkts',
      useText: 'Die Nutzung dieser Webseite ist nur zu rechtmäßigen Zwecken erlaubt. Versuche, die Seite oder Kontaktkanäle zu beschädigen, zu manipulieren oder missbräuchlich zu verwenden, sind untersagt.',
      disclaimerTitle: 'Haftungsausschluss und Haftungsbegrenzung',
      disclaimerText: 'Dieses Portfolio wird ohne Gewähr bereitgestellt. Für externe Links, Dienste Dritter oder mittelbare Schäden, die aus der Nutzung dieser Webseite entstehen, wird keine Haftung übernommen.',
      indemnityTitle: 'Freistellung',
      indemnityText: 'Du verpflichtest dich, den Seitenbetreiber von Ansprüchen, Schäden oder rechtlichen Kosten freizustellen, die durch missbräuchliche Nutzung oder Verstoß gegen diese Bedingungen entstehen.',
      inquiryText: 'Für rechtliche Anfragen kontaktiere bitte',
      dateLabel: 'Stand: 16. April 2026'
    }
  };

  content = computed(() => {
    let currentLanguage = this.languageService.currentLanguage();
    return this.contentByLanguage[currentLanguage];
  });

}
