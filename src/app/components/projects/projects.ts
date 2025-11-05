import { Component } from '@angular/core';
import { Dialog } from './dialog/dialog';
import { ProjectDialog } from '../../Interfaces/dialog.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Dialog],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  projects = [
    {
      name: "Join",
      class: 'join',
      languages: ["Angular", "Typescript", "HTML", "CSS", "Firebase"],
      previewImages: ['./assets/img/projects/join.svg']
    },
    {
      name: "El Pollo Loco",
      class: 'el_pollo_loco',
      languages: ["Javascript", "HTML", "CSS"],
      previewImages: ['./assets/img/projects/el_pollo_loco.svg']
    },
    {
      name: "Pokedex",
      class: 'pokedex last_link',
      languages: ["HTML", "CSS", "Javascript", "API"],
      previewImages: ['./assets/img/projects/pokedex.svg']
    }
  ];

  isClicked = false;

  projectDialog = [
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

  currentPreview = {
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

  giveObject(index: number): void {
    this.currentPreview = this.projectDialog[index]

  }
}


