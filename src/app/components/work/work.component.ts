import { Component, OnInit } from '@angular/core';
import { workExperience } from 'src/app/shared/cv-data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  public workList = workExperience.sort((a, b) => {
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
