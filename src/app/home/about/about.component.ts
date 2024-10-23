import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { skills, education, summary } from './mock/skills';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('resumeAnimation', [
      transition(':enter', [
        style({ right: '-100%', opacity: 0 }),
        animate('300ms ease-in', style({ right: '0', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ right: '-100%', opacity: 0 })),
      ]),
    ]),
  ],
})
export class AboutComponent {
  skills = skills;
  education = education;
  summary = summary;
  isResumeOpen: boolean = false;

  openResume() {
    this.isResumeOpen = true;
  }

  closeResume() {
    this.isResumeOpen = false;
  }
}
