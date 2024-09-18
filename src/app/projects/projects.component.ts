import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  showSchProject = false;

  constructor(private router: Router) {}

  navigateToSchProjects() {
    console.log('Take Me There button clicked');
    this.showSchProject = true;
  }
}
