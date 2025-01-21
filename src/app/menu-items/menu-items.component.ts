import { Component, input } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  imports: [],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent {
  public link = input<string>();
  public label = input<string>();
}
