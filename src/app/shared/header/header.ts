import { AfterViewInit, Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

type NavigationSection = {
  id: string;
  label: string;
};

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements AfterViewInit {
  private router = inject(Router);

  isMenuOpen = false;
  isMobileLayout = false;
  activeSectionId = 'home';

  sections: NavigationSection[] = [
    { id: 'about', label: 'About me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'comments', label: 'Comments' },
    { id: 'contact', label: 'Contact' }
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
