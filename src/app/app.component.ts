import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'Victor Vaz',
      content: 'I have 23 years old, and I’m so glad for be part of technology area. Always keep myself constantly learning.',
      image: '/assets/images/victor-vaz.jpg'
    });
  }

  title = 'Victor Vaz';
}
