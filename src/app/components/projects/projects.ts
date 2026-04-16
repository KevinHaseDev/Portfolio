import { Component, DOCUMENT, Inject, computed, inject, signal } from '@angular/core';
import { Dialog } from './dialog/dialog';
import { ProjectDialog } from '../../Interfaces/dialog.interface';
import { AppLanguage, LanguageService } from '../../services/language.service';
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

  private contentByLanguage: Record<AppLanguage, ProjectsContent> = {
    en: {
      sectionLabel: 'Portfolio',
      sectionTitle: 'Featured Projects',
      sectionLineOne: 'Explore a selection of my work here and interact with',
      sectionLineTwo: 'projects to see my skills in action.',
      dialogQuestion: 'What is this project about?'
    },
    de: {
      sectionLabel: 'Portfolio',
      sectionTitle: 'Ausgewählte Projekte',
      sectionLineOne: 'Hier findest du eine Auswahl meiner Arbeiten. Interagiere mit den',
      sectionLineTwo: 'Projekten, um meine Fähigkeiten in Aktion zu sehen.',
      dialogQuestion: 'Worum geht es in diesem Projekt?'
    }
  };

  content = computed(() => {
    let currentLanguage = this.languageService.currentLanguage();
    return this.contentByLanguage[currentLanguage];
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

  private projectDialogByLanguage: Record<AppLanguage, ProjectDialog[]> = {
    en: [
      {
        id: 'infoDialog',
        title: '01',
        name: 'Join',
        description: 'Task manager inspired by the Kanban system. Create and organize tasks with drag and drop, assign users, and structure work with categories.',
        technologies: [
          { name: 'CSS', icon: './assets/icons/Projects/CSS.svg' },
          { name: 'HTML', icon: './assets/icons/Projects/html.svg' },
          { name: 'Firebase', icon: './assets/icons/Projects/Firebase.svg' },
          { name: 'Angular', icon: './assets/icons/Projects/Angular.svg' },
          { name: 'Typescript', icon: './assets/icons/Projects/Typescript.svg' }
        ],
        actions: {
          github: {
            label: 'GitHub',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://github.com/Younes-Darabi/join-project'
          },
          liveTest: {
            label: 'Live Test',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://join-1351.developerakademie.net/index.html'
          }
        },
        footer: {
          closeLabel: 'Close',
          previewImage: './assets/img/projects/join.svg',
          nextProject: {
            label: 'Next project',
            icon: './assets/icons/Projects/arrow_forward.svg'
          }
        }
      },
      {
        id: 'infoDialog',
        title: '02',
        name: 'El Pollo Loco',
        description: 'Jump-and-run game based on an object-oriented approach. Help Pepe collect coins and tabasco to defeat the crazy hen.',
        technologies: [
          { name: 'CSS', icon: './assets/icons/Projects/CSS.svg' },
          { name: 'HTML', icon: './assets/icons/Projects/html.svg' },
          { name: 'Javascript', icon: './assets/icons/Projects/Javascript.svg' }
        ],
        actions: {
          github: {
            label: 'GitHub',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://github.com/KevinHaseDev/El-Pollo-Loco.git'
          },
          liveTest: {
            label: 'Live Test',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://kevin-hase.developerakademie.net/El%20Pollo%20Loco/index.html'
          }
        },
        footer: {
          closeLabel: 'Close',
          previewImage: './assets/img/projects/el_pollo_loco.svg',
          nextProject: {
            label: 'Next project',
            icon: './assets/icons/Projects/arrow_forward.svg'
          }
        }
      },
      {
        id: 'infoDialog',
        title: '03',
        name: 'PokeDex',
        description: 'Interactive Pokemon encyclopedia based on an API-driven architecture. Search, filter, and explore Pokemon in real time with data from the PokeAPI.',
        technologies: [
          { name: 'CSS', icon: './assets/icons/Projects/CSS.svg' },
          { name: 'HTML', icon: './assets/icons/Projects/html.svg' },
          { name: 'Javascript', icon: './assets/icons/Projects/Javascript.svg' }
        ],
        actions: {
          github: {
            label: 'GitHub',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://github.com/KevinHaseDev/Pokedex.git'
          },
          liveTest: {
            label: 'Live Test',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://kevin-hase.developerakademie.net/Pokedex/index.html'
          }
        },
        footer: {
          closeLabel: 'Close',
          previewImage: './assets/img/projects/Pokedex_screen.jpg',
          nextProject: {
            label: 'Next project',
            icon: './assets/icons/Projects/arrow_forward.svg'
          }
        }
      }
    ],
    de: [
      {
        id: 'infoDialog',
        title: '01',
        name: 'Join',
        description: 'Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-drop, weise Nutzer zu und strukturiere Workflows mit Kategorien.',
        technologies: [
          { name: 'CSS', icon: './assets/icons/Projects/CSS.svg' },
          { name: 'HTML', icon: './assets/icons/Projects/html.svg' },
          { name: 'Firebase', icon: './assets/icons/Projects/Firebase.svg' },
          { name: 'Angular', icon: './assets/icons/Projects/Angular.svg' },
          { name: 'Typescript', icon: './assets/icons/Projects/Typescript.svg' }
        ],
        actions: {
          github: {
            label: 'GitHub',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://github.com/Younes-Darabi/join-project'
          },
          liveTest: {
            label: 'Live ansehen',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://join-1351.developerakademie.net/index.html'
          }
        },
        footer: {
          closeLabel: 'Schließen',
          previewImage: './assets/img/projects/join.svg',
          nextProject: {
            label: 'Nächstes Projekt',
            icon: './assets/icons/Projects/arrow_forward.svg'
          }
        }
      },
      {
        id: 'infoDialog',
        title: '02',
        name: 'El Pollo Loco',
        description: 'Jump-and-run-Spiel auf objektorientierter Basis. Hilf Pepe dabei, Münzen und Tabasco zu sammeln, um die verrückte Henne zu besiegen.',
        technologies: [
          { name: 'CSS', icon: './assets/icons/Projects/CSS.svg' },
          { name: 'HTML', icon: './assets/icons/Projects/html.svg' },
          { name: 'Javascript', icon: './assets/icons/Projects/Javascript.svg' }
        ],
        actions: {
          github: {
            label: 'GitHub',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://github.com/KevinHaseDev/El-Pollo-Loco.git'
          },
          liveTest: {
            label: 'Live ansehen',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://kevin-hase.developerakademie.net/El%20Pollo%20Loco/index.html'
          }
        },
        footer: {
          closeLabel: 'Schließen',
          previewImage: './assets/img/projects/el_pollo_loco.svg',
          nextProject: {
            label: 'Nächstes Projekt',
            icon: './assets/icons/Projects/arrow_forward.svg'
          }
        }
      },
      {
        id: 'infoDialog',
        title: '03',
        name: 'PokeDex',
        description: 'Interaktive Pokemon-Enzyklopädie auf API-basierter Architektur. Suche, filtere und entdecke Pokemon in Echtzeit mit Daten aus der PokeAPI.',
        technologies: [
          { name: 'CSS', icon: './assets/icons/Projects/CSS.svg' },
          { name: 'HTML', icon: './assets/icons/Projects/html.svg' },
          { name: 'Javascript', icon: './assets/icons/Projects/Javascript.svg' }
        ],
        actions: {
          github: {
            label: 'GitHub',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://github.com/KevinHaseDev/Pokedex.git'
          },
          liveTest: {
            label: 'Live ansehen',
            icon: './assets/icons/Projects/arrow_outward.svg',
            link: 'https://kevin-hase.developerakademie.net/Pokedex/index.html'
          }
        },
        footer: {
          closeLabel: 'Schließen',
          previewImage: './assets/img/projects/Pokedex_screen.jpg',
          nextProject: {
            label: 'Nächstes Projekt',
            icon: './assets/icons/Projects/arrow_forward.svg'
          }
        }
      }
    ]
  };

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
    let currentLanguage = this.languageService.currentLanguage();
    return this.projectDialogByLanguage[currentLanguage];
  }
}
