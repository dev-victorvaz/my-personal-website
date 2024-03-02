import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderTitleService } from 'src/app/services/header-title.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  title = 'Skills';
  titlePt = 'Habilidades';
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

  openSqlCertificate(): void {
    window.open("https://drive.google.com/file/d/1M5gMYE0-4gY_jqdDpTeAqbGvjmAfy5s_/view?usp=sharing", '_blank');
  }

  openJavaCertificate(): void {
    window.open("https://drive.google.com/file/d/1FDrwPuomlaU9pePVAkpBdaUV709fUsKQ/view?usp=sharing", '_blank');
  }

  openAzureDevOpsCertificate(): void {
    window.open("https://drive.google.com/file/d/1j2dRSHqAZpweYoPuw5w4tYpe8_hYUiwX/view?usp=share_link", '_blank');
  }

}
