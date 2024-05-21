import { Component } from '@angular/core';
import { ResumeDownloadService } from '../service/resume-download.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private resumeDownloadService: ResumeDownloadService) {}

  downloadResume(): void {
    this.resumeDownloadService.downloadResume(); // Call the downloadResume method from the service
  }
}
