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
    './assets/images/projects/join.svg',
    './assets/images/projects/el_pollo_loco.svg',
    './assets/images/projects/Pokedex_screen.jpg'
  ];


  
}

