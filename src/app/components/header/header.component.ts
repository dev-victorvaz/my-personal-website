import { Component, OnInit } from '@angular/core';
import { AgeService } from 'src/app/services/age.service';
import { CollegeStatusService } from 'src/app/services/college-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private ageService: AgeService,
    private collegeStatus: CollegeStatusService) { }

  ngOnInit(): void { }

  getAge(): number {
    return this.ageService.getAge();
  }

  getCollegeStatus(): string {
    return this.collegeStatus.getCollegeStatus();
  }

}
