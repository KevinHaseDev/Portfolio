import { Component, computed, inject } from '@angular/core';
import { AppLanguage, LanguageService } from '../../services/language.service';

type CommentEntry = {
  comment: string;
  name: string;
};

type CommentsContent = {
  heading: string;
  items: CommentEntry[];
};

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrls: ['./comments.scss']
})
export class Comments {
  private languageService = inject(LanguageService);

  private contentByLanguage: Record<AppLanguage, CommentsContent> = {
    en: {
      heading: 'What my colleagues say about me',
      items: [
        {
          comment: 'Kevin is a highly reliable and dedicated team member. He manages his time very well, works equally effectively independently and within a team, and is always punctual. In addition, he is a very helpful person.',
          name: 'Anastasia Tsypkaykina'
        },
        {
          comment: 'Kevin made a significant contribution to the success of our project thanks to his clear communication, extensive knowledge, and quick grasp of new concepts. He was also always willing to lend a hand whenever help was needed.',
          name: 'Imra Skaliks'
        },
        {
          comment: 'Kevin was an exceptionally patient and supportive teammate who consistently helped the team and provided clear guidance when needed. His presence created a positive and collaborative environment, and I would be very happy to work with him again.',
          name: 'Younes Darabi'
        }
      ]
    },
    de: {
      heading: 'Was meine Kolleginnen und Kollegen über mich sagen',
      items: [
        {
          comment: 'Kevin ist ein sehr zuverlässiger und engagierter Teamkollege. Er organisiert seine Zeit hervorragend, arbeitet selbstständig wie auch im Team sehr effektiv und ist stets pünktlich. Zudem ist er jederzeit hilfsbereit.',
          name: 'Anastasia Tsypkaykina'
        },
        {
          comment: 'Kevin hat durch seine klare Kommunikation, sein breites Fachwissen und seine schnelle Auffassungsgabe wesentlich zum Projekterfolg beigetragen. Wenn Unterstützung gebraucht wurde, war er immer zur Stelle.',
          name: 'Imra Skaliks'
        },
        {
          comment: 'Kevin war ein außergewöhnlich geduldiger und unterstützender Teamkollege, der das Team konstant begleitet und bei Bedarf klare Orientierung gegeben hat. Seine Präsenz hat ein positives, kollaboratives Arbeitsklima geschaffen, und ich würde jederzeit wieder mit ihm zusammenarbeiten.',
          name: 'Younes Darabi'
        }
      ]
    }
  };

  content = computed(() => {
    let currentLanguage = this.languageService.currentLanguage();
    return this.contentByLanguage[currentLanguage];
  });

  activeIndex = 1;

  next(): void {
    let comments = this.content().items;
    this.activeIndex = (this.activeIndex + 1) % comments.length;
  }

  prev(): void {
    let comments = this.content().items;
    this.activeIndex = (this.activeIndex - 1 + comments.length) % comments.length;
  }

  visibleComments(): CommentEntry[] {
    let comments = this.content().items;
    let length = comments.length;
    let leftIndex = (this.activeIndex - 1 + length) % length;
    let rightIndex = (this.activeIndex + 1) % length;
    return [comments[leftIndex], comments[this.activeIndex], comments[rightIndex]];
  }
}
