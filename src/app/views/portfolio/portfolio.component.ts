import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderTitleService } from 'src/app/services/header-title.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  title = 'Portfolio';
  titlePt = 'Portfólio';
  currentLanguage: string = '';
  portugueseLanguage: string = 'pt';

  constructor(
    private headerTitle: HeaderTitleService,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.currentLanguage = navigator.language;
      if (this.currentLanguage.includes(this.portugueseLanguage)) {
        this.headerTitle.setHeaderTitle(this.titlePt);
        this.titleService.setTitle(`Victor Vaz - ${this.titlePt}`);
      }
      else {
        this.headerTitle.setHeaderTitle(this.title);
        this.titleService.setTitle(`Victor Vaz - ${this.title}`);
      }
    }
  }

}
