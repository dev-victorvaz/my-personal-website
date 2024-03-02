import { Component } from '@angular/core';
import { HeaderTitleService } from 'src/app/services/header-title.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent {
  constructor(
    private headerTitle: HeaderTitleService
  ) { }

  getPageTitle(): string {
    return this.headerTitle.getHeaderTitle();
  }
}
