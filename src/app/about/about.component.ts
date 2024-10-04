import { Component } from '@angular/core';
import { ResumeDownloadService } from '../service/resume-download.service';
import { skills, education, summary } from './mock/skills'; // Adjust the path as needed

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  skills = skills;
  education = education;
  summary = summary;

  constructor(private resumeDownloadService: ResumeDownloadService) {}

  onDownloadResume(): void {
    this.resumeDownloadService.downloadResume();
  }
}
