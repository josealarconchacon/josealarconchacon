import { Component, OnInit } from '@angular/core';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  showSchProject = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.showSchProject$.subscribe((show) => {
      this.showSchProject = show;
    });
  }

  navigateToSchProjects() {
    this.sharedService.setShowSchProject(true);
  }
}
