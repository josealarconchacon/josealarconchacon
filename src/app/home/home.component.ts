import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.animateText('.welcome-text', 'Welcome to My Portfolio', 100);
    setTimeout(() => {
      this.animateText(
        '.intro-text',
        "Hi, I'm Jose, a professional and current apprentice at one of the leading financial companies. Explore my work and projects below.",
        100
      );
    }, 3000); // delay to start the second animation
  }

  animateText(selector: string, text: string, interval: number) {
    const element = document.querySelector(selector);
    if (element) {
      const words = text.split(/\s+/); // Split text by any whitespace characters
      const span = this.renderer.createElement('span');
      this.renderer.appendChild(element, span);
      this.renderer.addClass(span, 'fade-in');

      let totalDelay = 0;

      words.forEach((word, index) => {
        setTimeout(() => {
          const textNode = this.renderer.createText(word + ' '); // Add space character after each word
          this.renderer.appendChild(span, textNode);
        }, totalDelay);
        totalDelay += interval * (word.length + 1); // Add interval for each character plus one for the space
      });
    }
  }
}

// animateText(selector: string, text: string, interval: number) {
//   const element = document.querySelector(selector);
//   if (element) {
//     const words = text.split('   '); // Split text by words
//     words.forEach((word, index) => {
//       setTimeout(() => {
//         const span = this.renderer.createElement('span');
//         const textNode = this.renderer.createText(word + ' '); // Add space character after each word
//         this.renderer.appendChild(span, textNode);
//         this.renderer.appendChild(element, span);
//         this.renderer.addClass(span, 'fade-in');
//       }, index * interval);
//     });
//   }
// }
// }
