import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.animateText('.welcome-text', 'Jose is here', 100);
    setTimeout(() => {
      this.animateText(
        '.intro-text',
        'A professional and former apprentice at one of the leading financial companies. Explore my work and projects below.',
        100
      );
    }, 3000);
  }

  animateText(selector: string, text: string, interval: number) {
    const element = document.querySelector(selector);
    if (element) {
      const words = text.split(/\s+/);
      const span = this.renderer.createElement('span');
      this.renderer.appendChild(element, span);
      this.renderer.addClass(span, 'fade-in');

      let totalDelay = 0;

      words.forEach((word, index) => {
        setTimeout(() => {
          const textNode = this.renderer.createText(word + ' ');
          this.renderer.appendChild(span, textNode);
        }, totalDelay);
        totalDelay += interval * (word.length + 1);
      });
    }
  }
}
