import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItemsComponent } from '../../menu-items/menu-items.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MenuItemsComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  progress = 0;

  ngOnInit(): void {
    
  }

  public menuItems = [
    { label: '01. Profile', link: '#' },
    { label: '02. Work', link: '#' },
    { label: '✻ Contact', link: '#' },
    { label: '✻ LinkedIn', link: '#' },
  ];

  handleItemClick(label: string): void {
    console.log(`Clicked on menu item: ${label}`);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.progress = (scrollTop / scrollHeight) * 100;
  }
}

