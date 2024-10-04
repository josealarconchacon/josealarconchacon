import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-sch-projects',
  templateUrl: './sch-projects.component.html',
  styleUrls: ['./sch-projects.component.css'],
})
export class SchProjectsComponent implements OnInit {
  projects = [
    {
      projectImage: '../../assets/img/lostAndFoundUI.png',
      projectTitle: 'Lost & Found',
      sourceImage: '../../../assets/icons/github_3291695 (2).png',
      projectSourceLink: 'https://github.com/josealarconchacon/Lost-And-Found',
    },
    {
      projectImage: '../../../assets/img/image01.png',
      projectTitle: 'MindBodyReminder',
      sourceImage: '../../../assets/icons/github_3291695 (2).png',
      projectSourceLink:
        'https://github.com/josealarconchacon/MindBodyReminder',
    },
    {
      projectImage: '../../../assets/img/image02.png',
      projectTitle: 'SCOOT-CO',
      sourceImage: '../../../assets/icons/github_3291695 (2).png',
      projectSourceLink: 'https://github.com/josealarconchacon/SCOOT-CO',
    },
    {
      projectImage: '../../../assets/img/image04.png',
      projectTitle: 'Debt-Tracker',
      sourceImage: '../../../assets/icons/github_3291695 (2).png',
      projectSourceLink: 'https://github.com/josealarconchacon/debt-tracker',
    },
  ];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {}

  back() {
    console.log('Take Me Back');
    this.sharedService.setShowSchProject(false); // Hide this component
  }
}
