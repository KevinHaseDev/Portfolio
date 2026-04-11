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
      comment: "Kevin is a highly reliable and dedicated team member. He manages his time very well, works equally effectively independently and within a team, and is always punctual. In addition, he is helpful person.",
      name: "Anastasia Tsypkaykina"
    },
    {
      comment: "Kevin made a significant contribution to the success of our project thanks to his clear communication, extensive knowledge, and quick grasp of new concepts. He was also always willing to lend a hand whenever help was needed. ",
      name: "Imra Skaliks"
    },
    {
      comment: "Kevin was an exceptionally patient and supportive teammate who consistently helped the team and provided clear guidance when needed. His presence created a positive and collaborative environment, and I would be very happy to work with him again.",
      name: "Younes Darabi"
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
