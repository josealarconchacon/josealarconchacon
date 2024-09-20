import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResumeDownloadService } from '../service/resume-download.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(
    private http: HttpClient,
    private resumeDownloadService: ResumeDownloadService
  ) {}

  onDownloadResume(): void {
    this.resumeDownloadService.downloadResume();
  }

  isFormValid() {
    return this.formData.name && this.formData.email && this.formData.message;
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.http
        .post('http://localhost:3000/send-email', this.formData)
        .subscribe({
          next: (response: any) => {
            console.log('Email sent successfully', response);
            alert('Your message has been sent.');
          },
          error: (error) => {
            console.error('Error sending email', error);
            alert(
              'There was an error sending your message. Please try again later.'
            );
          },
        });
      this.resetForm();
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
