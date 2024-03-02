import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {

  constructor() { }

  private pageTitle: string = '';

  setHeaderTitle(title:string):void {
    this.pageTitle = title;
  }

  getHeaderTitle(): string {
    return this.pageTitle;
  }

}
