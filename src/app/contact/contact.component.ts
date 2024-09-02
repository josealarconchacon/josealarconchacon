import { Component } from '@angular/core';
import { ResumeDownloadService } from '../service/resume-download.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private resumeDownloadService: ResumeDownloadService) {}

  onDownloadResume(): void {
    this.resumeDownloadService.downloadResume();
  }

  isFormValid(): boolean {
    return (
      this.name.trim() !== '' &&
      this.email.trim() !== '' &&
      this.message.trim() !== ''
    );
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Form submitted successfully');
      // Here you can add your form submission logic
      // For example, sending the data to an API endpoint
      this.resetForm();
    }
  }

  resetForm(): void {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
