import { Injectable, signal } from '@angular/core';

export type AppLanguage = 'en' | 'de';

type TranslationTree = Record<string, unknown>;
type TranslationCollection = Partial<Record<AppLanguage, TranslationTree>>;

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private storageKey = 'portfolio-language';
  private languageSignal = signal<AppLanguage>(this.readStoredLanguage());
  private translationsSignal = signal<TranslationCollection>({});
  private defaultTranslationsByPath: Record<string, unknown> = {
    'header.sections': {
      about: '',
      skills: '',
      projects: '',
      comments: '',
      contact: ''
    },
    'header.aria.menuOpen': '',
    'header.aria.menuClose': '',
    'header.aria.navigation': '',
    'header.aria.switchToGerman': '',
    'header.aria.switchToEnglish': '',
    'header.aria.homeButton': '',
    'header.aria.logoAlt': '',
    'landingPage': {
      roleTitle: '',
      checkWorkButton: '',
      contactButton: '',
      bannerItems: []
    },
    'aboutMe': {
      subtitle: '',
      title: '',
      introduction: '',
      locationText: '',
      mindsetText: '',
      problemSolvingText: ''
    },
    'skillSet': {
      subtitle: '',
      title: '',
      description: '',
      needAnotherSkillText: '',
      contactPrompt: '',
      talkButton: ''
    },
    'projects.content': {
      sectionLabel: '',
      sectionTitle: '',
      sectionLineOne: '',
      sectionLineTwo: '',
      dialogQuestion: ''
    },
    'projects.dialogs': [
      {
        id: '',
        title: '',
        name: '',
        description: '',
        technologies: [],
        actions: {
          github: {
            label: '',
            icon: '',
            link: ''
          },
          liveTest: {
            label: '',
            icon: '',
            link: ''
          }
        },
        footer: {
          closeLabel: '',
          previewImage: '',
          nextProject: {
            label: '',
            icon: ''
          }
        }
      }
    ],
    'comments': {
      heading: '',
      items: [
        { comment: '', name: '' },
        { comment: '', name: '' },
        { comment: '', name: '' }
      ]
    },
    'contact': {
      sectionTitle: '',
      sectionHeadlineLineOne: '',
      sectionHeadlineLineTwo: '',
      problemHeadline: '',
      introductionText: '',
      frontendPromptText: '',
      frontendPromptHighlight: '',
      nameLabel: '',
      namePlaceholder: '',
      emailLabel: '',
      emailPlaceholder: '',
      messageLabel: '',
      messagePlaceholder: '',
      privacyLabelPrefix: '',
      privacyPolicyLabel: '',
      privacyLabelSuffix: '',
      sendingButtonText: '',
      submitButtonText: '',
      successMessage: '',
      nameMissingError: '',
      namePatternError: '',
      emailMissingError: '',
      emailFormatError: '',
      emailInvalidError: '',
      messageMissingError: '',
      privacyMissingError: ''
    },
    'footer': {
      role: '',
      location: '',
      emailLinkLabel: '',
      legalNoticeLinkLabel: ''
    },
    'legalNotice': {
      pageTitle: '',
      imprintTitle: '',
      locationText: '',
      emailLabel: '',
      acceptanceTitle: '',
      acceptanceText: '',
      scopeTitle: '',
      scopeText: '',
      rightsTitle: '',
      rightsText: '',
      useTitle: '',
      useText: '',
      disclaimerTitle: '',
      disclaimerText: '',
      indemnityTitle: '',
      indemnityText: '',
      inquiryText: '',
      dateLabel: ''
    },
    'privacyPolicy': {
      pageTitle: '',
      controllerTitle: '',
      controllerText: '',
      dataTitle: '',
      dataText: '',
      contactFormTitle: '',
      contactFormText: '',
      purposeTitle: '',
      purposeText: '',
      storageTitle: '',
      storageText: '',
      rightsTitle: '',
      rightsItems: [],
      requestContactTitle: '',
      requestContactText: '',
      lastUpdateLabel: ''
    }
  };

  currentLanguage = this.languageSignal.asReadonly();

  constructor() {
    void this.initializeTranslations();
  }

  async initializeTranslations(): Promise<void> {
    await this.loadLanguageTranslations('en');
    if (this.languageSignal() === 'de') {
      await this.loadLanguageTranslations('de');
    }
  }

  async setLanguage(language: AppLanguage): Promise<void> {
    if (language === this.languageSignal()) {
      return;
    }
    this.languageSignal.set(language);
    this.persistLanguage(language);
    await this.loadLanguageTranslations(language);
  }

  isGermanLanguageActive(): boolean {
    return this.languageSignal() === 'de';
  }

  getTranslationByLanguage<T>(path: string, fallbackByLanguage?: Record<AppLanguage, T>): T {
    let language = this.languageSignal();
    let translation = this.readTranslation(path, language);
    if (translation !== undefined) {
      return translation as T;
    }
    if (fallbackByLanguage) {
      return fallbackByLanguage[language];
    }
    return this.getDefaultTranslation(path) as T;
  }

  private async loadLanguageTranslations(language: AppLanguage): Promise<void> {
    if (this.hasLoadedLanguage(language)) {
      return;
    }
    try {
      let response = await fetch(`/assets/i18n/${language}.json`);
      if (!response.ok) {
        return;
      }
      let content = await response.json();
      if (!this.isRecord(content)) {
        return;
      }
      this.translationsSignal.update((currentTranslations) => {
        return {
          ...currentTranslations,
          [language]: content
        };
      });
    } catch (error) {
      console.error(`Could not load translations for ${language}.`, error);
    }
  }

  private hasLoadedLanguage(language: AppLanguage): boolean {
    let translations = this.translationsSignal();
    return !!translations[language];
  }

  private readTranslation(path: string, language: AppLanguage): unknown {
    let translations = this.translationsSignal();
    let languageTree = translations[language];
    return this.readPath(path, languageTree);
  }

  private readPath(path: string, root: TranslationTree | undefined): unknown {
    if (!root) {
      return undefined;
    }
    let pathSegments = path.split('.');
    let currentValue: unknown = root;
    for (let pathSegment of pathSegments) {
      if (!this.isRecord(currentValue)) {
        return undefined;
      }
      currentValue = currentValue[pathSegment];
    }
    return currentValue;
  }

  private isRecord(value: unknown): value is TranslationTree {
    return typeof value === 'object' && value !== null;
  }

  private getDefaultTranslation(path: string): unknown {
    return this.defaultTranslationsByPath[path];
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
