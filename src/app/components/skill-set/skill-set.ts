import { Component, computed, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AppLanguage, LanguageService } from '../../services/language.service';

type SkillSetContent = {
  subtitle: string;
  title: string;
  description: string;
  needAnotherSkillText: string;
  contactPrompt: string;
  talkButton: string;
};

@Component({
  selector: 'app-skill-set',
  imports: [RouterLink],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss'
})
export class SkillSet {
  private languageService = inject(LanguageService);

  private contentByLanguage: Record<AppLanguage, SkillSetContent> = {
    en: {
      subtitle: 'Technologies',
      title: 'Skill Set',
      description: `I'm a front-end developer with hands-on experience in modern web technologies such as HTML, CSS, JavaScript, TypeScript, and Angular, as well as frameworks and tools that support responsive and dynamic user interfaces. I enjoy building clean, accessible, and performant web applications that deliver great user experiences.\n\nI'm highly adaptable and always eager to learn new technologies, keeping pace with the fast-evolving world of web development. Staying up to date with the latest trends, best practices, and tools is a key part of my workflow. It helps me continuously improve my craft and deliver solutions that meet current industry standards.`,
      needAnotherSkillText: 'You need another skill?',
      contactPrompt: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
      talkButton: 'Let\'s talk'
    },
    de: {
      subtitle: 'Technologien',
      title: 'Fähigkeiten',
      description: `Ich bin Frontend-Entwickler mit praktischer Erfahrung in modernen Webtechnologien wie HTML, CSS, JavaScript, TypeScript und Angular sowie in Tools und Frameworks für responsive und dynamische Benutzeroberflächen. Ich entwickle gerne saubere, barrierearme und performante Webanwendungen mit starkem Nutzerfokus.\n\nIch bin sehr anpassungsfähig und lerne kontinuierlich neue Technologien, um mit der schnellen Entwicklung im Webbereich Schritt zu halten. Aktuelle Trends, Best Practices und moderne Werkzeuge sind ein fester Teil meines Workflows. So verbessere ich mich stetig und liefere Lösungen, die heutigen Standards entsprechen.`,
      needAnotherSkillText: 'Du brauchst noch eine weitere Fähigkeit?',
      contactPrompt: 'Melde dich gerne bei mir. Ich freue mich darauf, mein Wissen in neuen Projekten einzubringen und zu erweitern.',
      talkButton: 'Lass uns sprechen'
    }
  };

  content = computed(() => {
    let currentLanguage = this.languageService.currentLanguage();
    return this.contentByLanguage[currentLanguage];
  });

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
    name: 'Firebase',
    icon: './assets/icons/Skills/firebase_icon.svg'
  },
  {
    name: 'Python',
    icon: './assets/icons/Skills/python_icon.svg'
  },
  {
    name: 'Django',
    icon: './assets/icons/Skills/django_icon.svg'
  },
  {
    name: 'SQL',
    icon: './assets/icons/Skills/SQL_icon.svg'
  },
  {
    name: 'Growth Mindset',
    icon: './assets/icons/Skills/mindset_icon.svg'
  }
];
}
