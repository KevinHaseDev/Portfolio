import { Component } from '@angular/core';

import { AboutMe } from '../components/about-me/about-me';
import { SkillSet } from '../components/skill-set/skill-set';
import { Projects } from '../components/projects/projects';
import { Comments } from '../components/comments/comments';
import { Contact } from '../components/contact/contact';
import { LandingPage } from '../components/landing-page/landing-page';

@Component({
  selector: 'app-main-page',
  imports: [LandingPage, AboutMe, SkillSet, Projects, Comments, Contact],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
