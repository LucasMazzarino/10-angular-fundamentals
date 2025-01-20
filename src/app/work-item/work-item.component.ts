import { Component, EventEmitter,Input , input, output } from '@angular/core';
import { Work } from '../interface/work.interface';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent {
  @Input() work!: Work;
  public index = input<number>();
  public onClick = output<boolean>();
  public isOpen = false

  HandleItem(): void {
    this.work.isOpen = !this.work.isOpen;
    this.onClick.emit(this.isOpen = !this.isOpen);
    console.log(this.isOpen)
  }
}
