import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { education } from 'src/app/shared/cv-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public educationList = education.sort((a, b) => {
    return b.startDate.getTime() - a.startDate.getTime();
  });

  constructor() {}

  ngOnInit(): void {}

  public convertDate(date: Date | string): string {
    if (typeof date === 'string') {
      return 'Teraz';
    }
    return date.toISOString().split('T')[0];
  }
}
