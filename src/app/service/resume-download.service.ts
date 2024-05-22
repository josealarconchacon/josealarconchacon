import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResumeDownloadService {
  constructor() {}

  downloadResume(): void {
    const resumeUrl = environment.resume;
    window.open(resumeUrl, '_blank');
  }
}
