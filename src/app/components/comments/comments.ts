import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrl: './comments.scss'
})
export class Comments {
comments: { comment: string, name: string }[] = [{
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
];}
