import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrls: ['./comments.scss']
})
export class Comments {
  activeIndex = 1;

  comments: { comment: string, name: string }[] = [
    {
      comment: "Code is clean and well structured. Always open for new technologies and willing to learn. A great team player!",
      name: "John Doe"
    },
    {
      comment: "Always willing to help and support teammates. A true asset to the team!",
      name: "Jane Smith"
    },
    {
      comment: "Delivers high-quality work consistently. Very reliable and dedicated!",
      name: "Jim Brown"
    }
  ];

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.comments.length;
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.comments.length) % this.comments.length;
  }

  visibleComments() {
    const len = this.comments.length;
    const left = (this.activeIndex - 1 + len) % len;
    const right = (this.activeIndex + 1) % len;
    return [this.comments[left], this.comments[this.activeIndex], this.comments[right]];
  }
}
