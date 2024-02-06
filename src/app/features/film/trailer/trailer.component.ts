import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'trailer',
  templateUrl: './trailer.component.html',
  styleUrl: './trailer.component.scss',
})
export class trailerComponent {
  @Input({ required: true }) Url;
  @Output() close = new EventEmitter<boolean>();
  onClose() {
    this.close.emit(false);
  }
}
