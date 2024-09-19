import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    this.animateText('.welcome-text', 'Hey there!', 100);
    setTimeout(() => {
      this.animateText(
        '.intro-text',
        "I'm Jose C. Alarcon, a professional and former apprentice at one of the leading financial companies. Explore my work and projects below.",
        50
      );
    }, 3000);
  }

  animateText(selector: string, text: string, interval: number) {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.innerHTML = ''; // Clear previous text
      let index = 0;

      const typeInterval = setInterval(() => {
        element.innerHTML += text.charAt(index);
        index++;
        if (index > text.length - 1) {
          clearInterval(typeInterval);
        }
      }, interval);
    }
  }
}
