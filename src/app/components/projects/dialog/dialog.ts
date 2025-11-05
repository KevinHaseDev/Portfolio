import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDialog } from '../../../Interfaces/dialog.interface';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.scss']
})
export class Dialog {
  @Input () projectDialog!: ProjectDialog;
  
}