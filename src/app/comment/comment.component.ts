import {Component,  Input} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() comment: string = '';
  @Input() height: number = 0;
  showFullComment: boolean = false;

  shorten: boolean = true;

  showComment(): void {
    this.showFullComment = !this.showFullComment;
  }

}
