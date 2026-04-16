import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type AboutMeContent = {
  subtitle: string;
  title: string;
  introduction: string;
  locationText: string;
  mindsetText: string;
  problemSolvingText: string;
};

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  private languageService = inject(LanguageService);

  content = computed(() => {
    return this.languageService.getTranslationByLanguage<AboutMeContent>('aboutMe');
  });

}
