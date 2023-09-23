import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description', content: 'I have 23 years old, and I’m so glad for be part of technology area. Always keep myself constantly learning.'
    });
    this.meta.addTag({
      name: 'keywords', content: 'Angular, SQL, DevOPS, Java, Developer, Programmer'
    });
    this.meta.addTag({
      name: 'author', content: 'Victor Vaz'
    });
    this.meta.addTag({
      content: 'https://www.victorvaz.com/assets/images/victor-vaz.jpg', itemprop: 'image'
    });
    this.meta.addTag({
      httpEquiv: 'refresh', content: '30'
    });

    this.meta.addTag({
      property: 'og:title', content: 'Victor Vaz'
    });
    this.meta.addTag({
      property: 'og:description', content: 'I have 23 years old, and I’m so glad for be part of technology area. Always keep myself constantly learning.'
    });
    this.meta.addTag({
      property: 'og:image', content: 'https://www.victorvaz.com/assets/images/victor-vaz.jpg'
    });
  }

  title = 'Victor Vaz';
}
