import { Component, EventEmitter,input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-work-toggle',
  templateUrl: './work-toggle.component.html',
  styleUrls: ['./work-toggle.component.scss'] 
})
export class WorkToggleComponent {
  public workType = input<string>();
  @Input() isOpen: boolean = false;
  @Output() onToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.onToggle.emit(this.isOpen);
  }
}
