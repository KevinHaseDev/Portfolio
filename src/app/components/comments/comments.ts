import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

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

  content = computed(() => {
    return this.languageService.getTranslationByLanguage<CommentsContent>('comments');
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
