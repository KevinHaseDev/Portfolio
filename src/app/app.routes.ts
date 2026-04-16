import { Routes } from '@angular/router';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { MainPage } from './main-page/main-page';
import { SkillSet } from './components/skill-set/skill-set';
import { Comments } from './components/comments/comments';
import { AboutMe } from './components/about-me/about-me';
import { LegalNotice } from './components/legal-notice/legal-notice';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
// import { LandingPage } from './components/landing-page/landing-page';

export const routes: Routes = [
    { path: '', component: MainPage },
    { path: 'projects', component: Projects },
    { path: 'contact', component: Contact },
    { path: 'skills', component: SkillSet },
    { path: 'comments', component: Comments },
    { path: 'about', component: AboutMe },
    { path: 'legal-notice', component: LegalNotice },
    { path: 'privacy-policy', component: PrivacyPolicy },
    // { path: 'landing', component: LandingPage }
];
