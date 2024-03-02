import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollegeStatusService {

  constructor() { }

  getCollegeStatus(): string {
    const startedCollege: Date = new Date('2022-01-01');
    const today: Date = new Date();
    const endCollege: Date = new Date('2025-07-15');

    let aux;

    let period: number = 1;
    if (today < endCollege) {
      aux = today.getFullYear() - startedCollege.getFullYear();
      for (aux; aux >= 0; aux--) {
        period += 1;
      }

      aux = today.getMonth() - startedCollege.getMonth();
      if (aux <= 7) {
        period++;
      }

      return $localize`studying Information Systems at UNA (currently ${period}th)`;
    } else {
      return $localize`I have a degree in Information System from UNA`;
    }
  }
  
}
