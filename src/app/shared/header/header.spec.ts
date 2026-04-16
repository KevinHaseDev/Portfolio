import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LanguageService } from '../../services/language.service';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    window.localStorage.removeItem('portfolio-language');

    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])]
    })
    .compileComponents();

    let languageService = TestBed.inject(LanguageService);
    await languageService.initializeTranslations();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch navigation labels to German when slider is activated', async () => {
    let aboutSection = component.sections.find((section) => section.id === 'about');

    await component.onLanguageSwitchChange({ target: { checked: true } } as unknown as Event);
    fixture.detectChanges();

    expect(aboutSection).toBeDefined();
    if (!aboutSection) {
      fail('Expected about section to exist.');
      return;
    }

    expect(component.getSectionLabel(aboutSection)).toBe('Über mich');
    expect(component.isGermanLanguageActive()).toBeTrue();
  });

  it('should keep navigation labels in English by default', () => {
    let aboutSection = component.sections.find((section) => section.id === 'about');

    expect(aboutSection).toBeDefined();
    if (!aboutSection) {
      fail('Expected about section to exist.');
      return;
    }

    expect(component.getSectionLabel(aboutSection)).toBe('About me');
    expect(component.isGermanLanguageActive()).toBeFalse();
  });
});
