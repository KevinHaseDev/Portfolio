import { AfterViewInit, Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppLanguage, LanguageService } from '../../services/language.service';

type NavigationSection = {
  id: string;
  labelByLanguage: {
    en: string;
    de: string;
  };
};

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements AfterViewInit {
  private router = inject(Router);
  private languageService = inject(LanguageService);

  isMenuOpen = false;
  isMobileLayout = this.getInitialLayoutState();
  activeSectionId = 'home';

  sections: NavigationSection[] = [
    {
      id: 'about',
      labelByLanguage: {
        en: 'About me',
        de: 'Über mich'
      }
    },
    {
      id: 'skills',
      labelByLanguage: {
        en: 'Skills',
        de: 'Fähigkeiten'
      }
    },
    {
      id: 'projects',
      labelByLanguage: {
        en: 'Projects',
        de: 'Projekte'
      }
    },
    {
      id: 'comments',
      labelByLanguage: {
        en: 'Comments',
        de: 'Kommentare'
      }
    },
    {
      id: 'contact',
      labelByLanguage: {
        en: 'Contact',
        de: 'Kontakt'
      }
    }
  ];

  ngAfterViewInit(): void {
    this.updateLayoutState();
    this.updateActiveSection();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateLayoutState();
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  @HostListener('window:keydown.escape')
  onEscapeKey(): void {
    this.closeMenu();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onLanguageSwitchChange(event: Event): void {
    let languageToggle = event.target as HTMLInputElement | null;
    if (!languageToggle) {
      return;
    }
    let nextLanguage: AppLanguage = languageToggle.checked ? 'de' : 'en';
    this.languageService.setLanguage(nextLanguage);
  }

  isGermanLanguageActive(): boolean {
    return this.languageService.isGermanLanguageActive();
  }

  getSectionLabel(section: NavigationSection): string {
    let currentLanguage = this.languageService.currentLanguage();
    return section.labelByLanguage[currentLanguage];
  }

  getMenuToggleAriaLabel(): string {
    let currentLanguage = this.languageService.currentLanguage();
    if (currentLanguage === 'de') {
      return this.isMenuOpen ? 'Menü schließen' : 'Menü öffnen';
    }
    return this.isMenuOpen ? 'Close menu' : 'Open menu';
  }

  getNavigationAriaLabel(): string {
    let currentLanguage = this.languageService.currentLanguage();
    if (currentLanguage === 'de') {
      return 'Hauptnavigation';
    }
    return 'Primary navigation';
  }

  getLanguageSwitchAriaLabel(): string {
    let currentLanguage = this.languageService.currentLanguage();
    if (currentLanguage === 'de') {
      return 'Sprache auf Englisch umstellen';
    }
    return 'Switch language to German';
  }

  getHomeButtonAriaLabel(): string {
    let currentLanguage = this.languageService.currentLanguage();
    if (currentLanguage === 'de') {
      return 'Zur Startsektion navigieren';
    }
    return 'Navigate to home section';
  }

  getLogoAltText(): string {
    let currentLanguage = this.languageService.currentLanguage();
    if (currentLanguage === 'de') {
      return 'Portfolio Logo';
    }
    return 'Portfolio logo';
  }

  async navigateToSection(sectionId: string): Promise<void> {
    this.activeSectionId = sectionId;
    this.closeMenu();
    await this.router.navigate(['/'], { fragment: sectionId });
  }

  getAriaHiddenValue(): string {
    if (!this.isMobileLayout) {
      return 'false';
    }
    return this.isMenuOpen ? 'false' : 'true';
  }

  private getInitialLayoutState(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.innerWidth <= 768;
  }

  private updateLayoutState(): void {
    this.isMobileLayout = window.innerWidth <= 768;
    if (!this.isMobileLayout) {
      this.isMenuOpen = false;
    }
  }

  private updateActiveSection(): void {
    let nextActiveSection = this.findVisibleSectionId();
    if (!nextActiveSection) {
      return;
    }
    this.activeSectionId = nextActiveSection;
  }

  private findVisibleSectionId(): string | null {
    let threshold = window.innerHeight * 0.35;
    for (let section of this.sections) {
      let element = document.getElementById(section.id);
      if (!element) {
        continue;
      }
      let rect = element.getBoundingClientRect();
      if (rect.top <= threshold && rect.bottom > threshold) {
        return section.id;
      }
    }
    return document.getElementById('home') ? 'home' : null;
  }

}
