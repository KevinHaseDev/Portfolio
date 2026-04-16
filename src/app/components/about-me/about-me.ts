import { Component, computed, inject } from '@angular/core';
import { AppLanguage, LanguageService } from '../../services/language.service';

type AboutMeContent = {
  subtitle: string;
  title: string;
  introduction: string;
  locationText: string;
  mindsetText: string;
  problemSolvingText: string;
};

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  private languageService = inject(LanguageService);

  private contentByLanguage: Record<AppLanguage, AboutMeContent> = {
    en: {
      subtitle: 'Who I Am',
      title: 'About Me',
      introduction: `Hi, I'm Kevin! I love coding because it allows me to create things from nothing, it's like turning ideas into reality. Technology never stops evolving, and that keeps me curious. What inspires me most is seeing my code actually work and make a difference, even in small ways. Every project teaches me something new and pushes me to improve.`,
      locationText: `I'm currently based in Meiningen, Germany, where I live with my family and three children. While relocation isn't possible for me, I'm fully open to remote opportunities and highly value teamwork and collaboration across distances. I enjoy working with diverse professionals from different backgrounds and believe that great results can be achieved from anywhere.`,
      mindsetText: `I'm an open-minded developer who's always eager to explore new technologies and expand my skill set. The fast-paced nature of the IT world motivates me to stay curious, keep learning, and adapt quickly to emerging tools and frameworks.`,
      problemSolvingText: `My approach to problem-solving combines analytical thinking, creativity, and persistence. I see every challenge as a learning opportunity to refine my understanding and improve my efficiency. I enjoy collaborating with others to find elegant and scalable solutions that not only work but work beautifully.`
    },
    de: {
      subtitle: 'Wer ich bin',
      title: 'Über mich',
      introduction: `Hi, ich bin Kevin! Ich liebe das Programmieren, weil ich damit aus dem Nichts etwas erschaffen kann. Es ist, als würde ich Ideen in reale Lösungen verwandeln. Technologie entwickelt sich ständig weiter und genau das hält mich neugierig. Am meisten motiviert mich, wenn mein Code wirklich funktioniert und einen Unterschied macht, auch im Kleinen. Jedes Projekt bringt neue Erkenntnisse und hilft mir, besser zu werden.`,
      locationText: `Ich lebe aktuell in Meiningen, Deutschland, gemeinsam mit meiner Familie und meinen drei Kindern. Ein Umzug kommt für mich derzeit nicht infrage, aber ich bin komplett offen für Remote-Arbeit und lege großen Wert auf Teamarbeit über Distanz. Ich arbeite gerne mit Menschen aus unterschiedlichen Hintergründen zusammen und bin überzeugt, dass starke Ergebnisse von überall entstehen können.`,
      mindsetText: `Ich bin ein offener Entwickler, der neue Technologien gerne ausprobiert und sein Wissen stetig erweitert. Die schnelle Entwicklung in der IT motiviert mich, neugierig zu bleiben, kontinuierlich zu lernen und mich schnell an neue Tools und Frameworks anzupassen.`,
      problemSolvingText: `Mein Ansatz beim Lösen von Problemen verbindet analytisches Denken, Kreativität und Ausdauer. Ich sehe jede Herausforderung als Chance, mein Verständnis zu vertiefen und effizienter zu arbeiten. Besonders gerne arbeite ich im Team an eleganten und skalierbaren Lösungen, die nicht nur funktionieren, sondern auch sauber umgesetzt sind.`
    }
  };

  content = computed(() => {
    let currentLanguage = this.languageService.currentLanguage();
    return this.contentByLanguage[currentLanguage];
  });

}
