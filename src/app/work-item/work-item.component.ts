import { Component, EventEmitter,Input , input, output } from '@angular/core';
import { Work } from '../interface/work.interface';

interface state{
  isOpen: boolean;
  id: number;
}
@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent {
  @Input() work!: Work;
  public index = input<number>();
  public onClick = output<state>();
  public isOpen = true

  HandleItem(): void {
    this.onClick.emit({isOpen: this.isOpen, id: this.index? this.index : 0});
  }
}
