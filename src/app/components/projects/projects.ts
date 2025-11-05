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
  previewImages = [
    './assets/img/projects/join.svg',
    './assets/img/projects/el_pollo_loco.svg',
    './assets/img/projects/Pokedex_screen.jpg'
  ];

  currentPreview: string = '';

  selectedProject?: ProjectDialog;
  isDialogOpen: boolean = false;

  ngOnInit(): void {
    this.currentPreview = this.previewImages[0];
  }

  setPreview(index: number): void {
    this.currentPreview = this.previewImages[index];
  }

  async openProject(project: ProjectDialog): Promise<void> {
    this.selectedProject = project;
    this.isDialogOpen = true;
    await Promise.resolve();
  }

  async closeProject(): Promise<void> {
    this.isDialogOpen = false;
    this.selectedProject = undefined;
    await Promise.resolve();
  }
}


