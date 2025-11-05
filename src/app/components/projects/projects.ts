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

  ngOnInit(): void {
    this.currentPreview = this.previewImages[0];
  }

  setPreview(index: number): void {
    this.currentPreview = this.previewImages[index];
  }

}


