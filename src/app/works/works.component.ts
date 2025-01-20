import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Work } from '../interface/work.interface';
import { WorkItemComponent } from '../work-item/work-item.component';

@Component({
  selector: 'app-works',
  imports: [WorkItemComponent,CommonModule], 
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  works: Work[] = [
    {
      name: 'APPLE',
      date: '(2023+)',
      type: 'PD&M DESIGN',
      extraInfo: '',
      isOpen: false
    },
    {
      name: 'AMAZON',
      date: '(2021 — 2023)',
      type: 'A. DESIGN DIRECTOR',
      extraInfo:
        'Brand building all new to world hardware and features for fitness brand Amazon Halo. Leading creative development of projects across marketing, product and content studio.',
      isOpen: false
    },
    {
      name: 'CRUISE',
      date: '(2019 — 2021)',
      type: 'BRAND DESIGN LEAD',
      extraInfo:
        'Developed brand visuals and language to prepare Cruise self-driving cars for market. Partnered with product and marketing to test and implement brand vision.',
      isOpen: false
    },
    {
      name: 'UBER',
      date: '(2018 — 2019)',
      type: 'DESIGN LEAD',
      extraInfo:
        'Lead rebrand of Uber Freight and art directed brand photoshoots & videos. Collaborated with global design team to update identity and build new website.',
      isOpen: false
    },
    {
      name: 'APPLE*',
      date: '(2016 — 2018)',
      type: 'ART DIRECTOR',
      extraInfo:
        'Contracted with interactive design team [*via Critical Mass] to design new user experience for .com retail. Designed a singular user account destination. Created videos and interactive experiences for MacBook Pro, iPhone, and Apple Watch.',
      isOpen: false
    },
    {
      name: 'SOUNDCLOUD',
      date: '(2014 — 2016)',
      type: 'SENIOR DESIGNER',
      extraInfo:
        'Created brand & product integrations for SoundCloud Go, with UXR & product. Created media partnership campaigns. Designed website & assets for advertising, On SoundCloud program, and creator genre onboarding.',
      isOpen: false
    },
    {
      name: 'BMF MEDIA',
      date: '(2013 — 2014)',
      type: 'DESIGNER',
      extraInfo:
        'Designed 10 year anniversary rebrand. Designed environment and collateral for custom & platform events. Worked closely with clients like Toyota, Dockers, H&M, AT&T and Dickies.',
      isOpen: false
    },
    {
      name: 'TH PRODN.',
      date: '(2012 — 2013)',
      type: 'DESIGNER',
      extraInfo:
        'Concepted and rendered builds for large scale client activations. Worked with clients and vendors to produce all graphic and fabricated assets. Art directed on-site event production and oversaw employer re-brand.',
      isOpen: false
    }
  ];

  public startNumer = false;

  toggleItem(index: boolean): void {
    this.startNumer = index;
    console.log(this.startNumer)
  }
}
