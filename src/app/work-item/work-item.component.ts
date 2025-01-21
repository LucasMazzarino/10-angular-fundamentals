import { Component,Input , input, output } from '@angular/core';
import { Work } from '../interface/work.interface';
import { WorkToggleComponent } from '../work-toggle/work-toggle.component';

@Component({
  selector: 'app-work-item',
  imports: [WorkToggleComponent],
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent {
  @Input() work!: Work;
  public index = input<number>();
  public onClick = output<boolean>();
  public onToggle = output<boolean>();

  toggleItem(state: boolean): void {
    this.work.isOpen = state;
    this.onToggle.emit(state);
  }
}
