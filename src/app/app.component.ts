import { Component } from '@angular/core';

import { Meta } from '@angular/platform-browser';
import { AgeService } from './services/age.service';
import { CollegeStatusService } from './services/college-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private meta: Meta,
    private ageService: AgeService,
    private collegeStatusService: CollegeStatusService) {
    this.meta.addTags([
      {
        name: 'description', content: $localize`I am ${this.ageService.getAge()} years old, ${this.collegeStatusService.getCollegeStatus()} and
        I'm very happy to be part of technology area.`},
      { name: 'author', content: 'Victor Vaz' },
      { name: 'keywords', content: 'Angular, SQL, DevOPS, Java, Developer, Programmer' },
      { content: 'https://www.victorvaz.com/assets/images/victor-vaz.jpg', itemprop: 'image' },
      { property: 'og:title', content: 'Victor Vaz' },
      {
        property: 'og:description', content: $localize`I am ${this.ageService.getAge()} years old, ${this.collegeStatusService.getCollegeStatus()} and
        I'm very happy to be part of technology area.`},
      { property: 'og:image', content: 'https://www.victorvaz.com/assets/images/victor-vaz.jpg' },
      { property: 'og:image:width', content: '512' },
      { property: 'og:image:height', content: '512' },
      { property: 'og:image:type', content: 'image/jpeg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://www.victorvaz.com/assets/images/victor-vaz.jpg' }
    ]);
  }

}
