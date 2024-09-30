import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sch-projects',
  templateUrl: './sch-projects.component.html',
  styleUrls: ['./sch-projects.component.css'],
})
export class SchProjectsComponent {
  projects = [
    {
      projectImage: '../../assets/img/lostAndFoundUI.png',
      projectTitle: 'Lost & Found',
      sourceImage: '../../../assets/icons/github_3291695 (2).png',
      projectSourceLink: 'https://github.com/josealarconchacon/Lost-And-Found',
    },
    {
      projectImage: '../../../assets/img/image (2).png',
      projectTitle: 'MindBodyReminder',
      sourceImage: '../../../assets/icons/github_3291695 (2).png',
      projectSourceLink:
        'https://github.com/josealarconchacon/MindBodyReminder',
    },
    {
      projectImage: '../../../assets/img/image (8).png',
      projectTitle: 'SCOOT-CO',
      sourceImage: '../../../assets/icons/github_3291695 (2).png',
      projectSourceLink: 'https://github.com/josealarconchacon/SCOOT-CO',
    },
  ];

  showSchProject = false;
  isVisible = true;

  back() {
    console.log('Take Me Back');
    this.showSchProject = true;
    this.isVisible = false;
  }
}
