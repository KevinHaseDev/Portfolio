import { Component, DOCUMENT, Inject, computed, inject, signal } from '@angular/core';
import { Dialog } from './dialog/dialog';
import { ProjectDialog } from '../../Interfaces/dialog.interface';
import { LanguageService } from '../../services/language.service';
import { Renderer2 } from '@angular/core';

type ProjectsContent = {
  sectionLabel: string;
  sectionTitle: string;
  sectionLineOne: string;
  sectionLineTwo: string;
  dialogQuestion: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Dialog],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  private languageService = inject(LanguageService);
  private currentProjectIndex = signal(0);

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  content = computed(() => {
    return this.languageService.getTranslationByLanguage<ProjectsContent>('projects.content');
  });

  projects = [
    {
      name: 'Join',
      class: 'join',
      languages: ['Angular', 'Typescript', 'HTML', 'CSS', 'Firebase'],
      previewImages: ['./assets/img/projects/join.svg']
    },
    {
      name: 'El Pollo Loco',
      class: 'el_pollo_loco',
      languages: ['Javascript', 'HTML', 'CSS'],
      previewImages: ['./assets/img/projects/el_pollo_loco.svg']
    },
    {
      name: 'Pokedex',
      class: 'pokedex last_link',
      languages: ['HTML', 'CSS', 'Javascript', 'API'],
      previewImages: ['./assets/img/projects/Pokedex_screen.jpg']
    }
  ];

  isClicked = false;
  currentPreviewImage: string = this.projects[0].previewImages[0];

  currentPreview = computed(() => {
    let dialogs = this.getCurrentProjectDialogs();
    return dialogs[this.currentProjectIndex()] ?? dialogs[0];
  });

  giveObject(index: number): void {
    this.currentProjectIndex.set(index);
    this.isClicked = true;
    this.renderer.addClass(this.document.body, 'dialog-open');
  }

  handleClose(): void {
    this.isClicked = false;
    this.renderer.removeClass(this.document.body, 'dialog-open');
  }

  handleNextProject(): void {
    let dialogs = this.getCurrentProjectDialogs();
    let nextIndex = (this.currentProjectIndex() + 1) % dialogs.length;
    this.currentProjectIndex.set(nextIndex);
  }

  setPreviewImage(image: string): void {
    this.currentPreviewImage = image;
  }

  private getCurrentProjectDialogs(): ProjectDialog[] {
    return this.languageService.getTranslationByLanguage<ProjectDialog[]>('projects.dialogs');
  }
}
