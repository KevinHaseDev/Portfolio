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

type ProjectPreviewVariant = 'join' | 'el_pollo_loco' | 'pokedex';

type ProjectData = {
  name: string;
  className: string;
  previewVariant: ProjectPreviewVariant;
  languages: string[];
  previewImage: string;
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

  projects: ProjectData[] = [
    {
      name: 'Join',
      className: 'join',
      previewVariant: 'join',
      languages: ['Angular', 'Typescript', 'HTML', 'CSS', 'Firebase'],
      previewImage: './assets/img/projects/join.jpg'
    },
    {
      name: 'El Pollo Loco',
      className: 'el_pollo_loco',
      previewVariant: 'el_pollo_loco',
      languages: ['Javascript', 'HTML', 'CSS'],
      previewImage: './assets/img/projects/el_pollo_loco.jpg'
    },
    {
      name: 'Pokedex',
      className: 'pokedex last_link',
      previewVariant: 'pokedex',
      languages: ['HTML', 'CSS', 'Javascript', 'API'],
      previewImage: './assets/img/projects/Pokedex_screen.jpg'
    }
  ];

  isClicked = false;
  currentPreviewImage: string = this.projects[0].previewImage;
  activePreviewVariant = signal<ProjectPreviewVariant>(this.projects[0].previewVariant);

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

  updatePreview(project: ProjectData): void {
    this.currentPreviewImage = project.previewImage;
    this.activePreviewVariant.set(project.previewVariant);
  }

  private getCurrentProjectDialogs(): ProjectDialog[] {
    return this.languageService.getTranslationByLanguage<ProjectDialog[]>('projects.dialogs');
  }
}
