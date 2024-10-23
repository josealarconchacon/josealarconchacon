import { Component } from '@angular/core';
import {
  personalInfo,
  skills,
  experience,
  education,
  projects,
} from './mock-data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  personalInfo = personalInfo;
  skills = skills;
  experience = experience;
  education = education;
  projects = projects;
}
