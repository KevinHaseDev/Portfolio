import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDialog } from '../../../Interfaces/dialog.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.scss']
})
export class Dialog {
  @Input() projectDialog!: ProjectDialog;

  @Output() closeDialog = new EventEmitter<void>();

  close() {
    this.closeDialog.emit();
  }
  @Output() nextProject = new EventEmitter<void>();

  next() {
    this.nextProject.emit();
  }
}