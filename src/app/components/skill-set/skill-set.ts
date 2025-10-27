import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-skill-set',
  imports: [RouterLink],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss'
})
export class SkillSet {
  iconList = [{
    name: 'Angular',
    icon: './assets/icons/Skills/angular_icon.svg'
  },
  {
    name: 'REST-API',
    icon: './assets/icons/Skills/api_icon.svg'
  },
  {
    name: 'CSS',
    icon: './assets/icons/Skills/css_icon.svg'
  },
  {
    name: 'HTML',
    icon: './assets/icons/Skills/html_icon.svg'
  },
  {
    name: 'JavaScript',
    icon: './assets/icons/Skills/javascript_icon.svg'
  },
  {
    name: 'TypeScript',
    icon: './assets/icons/Skills/typescript_icon.svg'
  },
  {
    name: 'Git',
    icon: './assets/icons/Skills/git_icon.svg'
  },
  {
    name: 'Growth Mindset',
    icon: './assets/icons/Skills/mindset_icon.svg'
  }
];
}
