import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
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
        let image = this.previewImages[index];
        this.currentPreview = `${image}`;
    }

  
}

