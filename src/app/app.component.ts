import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'carlojose';
  // scrollToSection(sectionId: string) {
  //   document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  // }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen = false; // Close menu after clicking a link
    }
  }
}
