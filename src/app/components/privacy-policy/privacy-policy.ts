import { Component, computed, inject } from '@angular/core';
import { AppLanguage, LanguageService } from '../../services/language.service';

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

  private contentByLanguage: Record<AppLanguage, PrivacyPolicyContent> = {
    en: {
      pageTitle: 'Privacy Policy',
      controllerTitle: '1. Controller',
      controllerText: 'Responsible for data processing on this website is Kevin Hase, Thuringia, Germany. Contact:',
      dataTitle: '2. Data We Process',
      dataText: 'When you visit this website, technical access data may be processed by hosting providers, including IP address, browser information, and access time.',
      contactFormTitle: '3. Contact Form',
      contactFormText: 'If you submit the contact form, we process your name, email address, and message content to respond to your request. Processing is based on your initiated communication.',
      purposeTitle: '4. Purpose and Legal Basis',
      purposeText: 'Data is processed solely to provide this website, ensure technical security, and handle contact requests. Legal bases may include consent, pre-contractual communication, and legitimate interest in secure website operation.',
      storageTitle: '5. Storage Duration',
      storageText: 'Personal data is stored only as long as necessary for the stated purpose or legal obligations. Once storage is no longer required, data is deleted or anonymized.',
      rightsTitle: '6. Your Rights',
      rightsItems: [
        'Right of access to your stored data',
        'Right to rectification of incorrect data',
        'Right to erasure and restriction of processing',
        'Right to data portability where applicable',
        'Right to object to data processing'
      ],
      requestContactTitle: '7. Contact for Privacy Requests',
      requestContactText: 'For all questions related to privacy and data protection, contact:',
      lastUpdateLabel: 'Last update: April 16, 2026'
    },
    de: {
      pageTitle: 'Datenschutzerklärung',
      controllerTitle: '1. Verantwortliche Stelle',
      controllerText: 'Verantwortlich für die Datenverarbeitung auf dieser Webseite ist Kevin Hase, Thüringen, Deutschland. Kontakt:',
      dataTitle: '2. Verarbeitete Daten',
      dataText: 'Beim Besuch dieser Webseite können technische Zugriffsdaten durch Hosting-Anbieter verarbeitet werden, darunter IP-Adresse, Browserinformationen und Zugriffszeit.',
      contactFormTitle: '3. Kontaktformular',
      contactFormText: 'Wenn du das Kontaktformular absendest, verarbeiten wir deinen Namen, deine E-Mail-Adresse und deinen Nachrichtentext, um auf deine Anfrage zu reagieren. Grundlage ist deine initiierte Kommunikation.',
      purposeTitle: '4. Zweck und Rechtsgrundlage',
      purposeText: 'Die Datenverarbeitung erfolgt ausschließlich zur Bereitstellung dieser Webseite, zur Gewährleistung der technischen Sicherheit und zur Bearbeitung von Kontaktanfragen. Rechtsgrundlagen können Einwilligung, vorvertragliche Kommunikation und berechtigtes Interesse am sicheren Betrieb der Webseite sein.',
      storageTitle: '5. Speicherdauer',
      storageText: 'Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck oder gesetzliche Pflichten erforderlich ist. Anschließend werden sie gelöscht oder anonymisiert.',
      rightsTitle: '6. Deine Rechte',
      rightsItems: [
        'Recht auf Auskunft über gespeicherte Daten',
        'Recht auf Berichtigung unrichtiger Daten',
        'Recht auf Löschung und Einschränkung der Verarbeitung',
        'Recht auf Datenübertragbarkeit, soweit anwendbar',
        'Recht auf Widerspruch gegen die Datenverarbeitung'
      ],
      requestContactTitle: '7. Kontakt bei Datenschutzanfragen',
      requestContactText: 'Bei allen Fragen rund um Datenschutz und Datensicherheit kontaktiere bitte:',
      lastUpdateLabel: 'Stand: 16. April 2026'
    }
  };

  content = computed(() => {
    let currentLanguage = this.languageService.currentLanguage();
    return this.contentByLanguage[currentLanguage];
  });

}
