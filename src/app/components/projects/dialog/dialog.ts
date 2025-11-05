import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDialog } from '../../../Interfaces/dialog.interface';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.scss']
})
export class Dialog {
  @Input() projectDialog: ProjectDialog[] = [
    {
      id: 'infoDialog',
      title: '01',
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
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
          icon: './assets/icons/Projects/arrow_outward.svg'
        },
        liveTest: {
          label: 'Live Test',
          icon: './assets/icons/Projects/arrow_outward.svg'
        }
      },
      footer: {
        closeLabel: 'Schließen',
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
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: [
        { name: 'CSS', icon: './assets/icons/Projects/CSS.svg' },
        { name: 'HTML', icon: './assets/icons/Projects/html.svg' },
        { name: 'Javascript', icon: './assets/icons/Projects/Javascript.svg' }
      ],
      actions: {
        github: {
          label: 'GitHub',
          icon: './assets/icons/Projects/arrow_outward.svg'
        },
        liveTest: {
          label: 'Live Test',
          icon: './assets/icons/Projects/arrow_outward.svg'
        }
      },
      footer: {
        closeLabel: 'Schließen',
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
      description: "Dive into the world of Pokémon with our interactive PokeDex app. Built on a modular, API-driven architecture, this project lets you search, filter and discover Pokémon using real-time data from the PokéAPI. Whether you're hunting for stats, types or evolutions – this digital encyclopedia brings the Pokémon universe to your fingertips",
      technologies: [
        { name: 'CSS', icon: './assets/icons/Projects/CSS.svg' },
        { name: 'HTML', icon: './assets/icons/Projects/html.svg' },
        { name: 'Javascript', icon: './assets/icons/Projects/Javascript.svg' }
      ],
      actions: {
        github: {
          label: 'GitHub',
          icon: './assets/icons/Projects/arrow_outward.svg'
        },
        liveTest: {
          label: 'Live Test',
          icon: './assets/icons/Projects/arrow_outward.svg'
        }
      },
      footer: {
        closeLabel: 'Schließen',
        previewImage: './assets/img/projects/Pokedex_screen.jpg',
        nextProject: {
          label: 'Next project',
          icon: './assets/icons/Projects/arrow_forward.svg'
        }
      }
    }
  ]
  // parent controls (optional)
  @Input() project?: ProjectDialog;
  @Input() isOpen: boolean = false;

  @Output() closed = new EventEmitter<void>();
  @Output() opened = new EventEmitter<ProjectDialog | undefined>();

  open(project?: ProjectDialog): void {
    this.project = project ?? this.project ?? this.projectDialog[0];
    this.isOpen = true;
    this.opened.emit(this.project);
  }

  close(): void {
    this.isOpen = false;
    this.closed.emit();
  }

  openById(id: string): void {
    let found = this.projectDialog.find(p => p.id === id);
    this.open(found);
  }

  nextProject(): void {
    if (!this.project) {
      return;
    }
    let index = this.projectDialog.findIndex(p => p.id === this.project!.id);
    let nextIndex = (index + 1) % this.projectDialog.length;
    this.open(this.projectDialog[nextIndex]);
  }
}