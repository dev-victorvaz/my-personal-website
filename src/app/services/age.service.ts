import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  constructor() { }

  getAge(): number {
    const birthday: Date = new Date('1999-12-14');
    const today: Date = new Date();

    let age: number = today.getFullYear() - birthday.getFullYear();

    if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
      age--;
    }

    return age;
  }

}
