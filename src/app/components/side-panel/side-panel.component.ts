import { Component, OnInit } from '@angular/core';
import { hardSkills, info, softSkills } from 'src/app/shared/cv-data.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent implements OnInit {
  public info = info;
  public hardSkills = hardSkills.sort((a, b) => {
    return b.value - a.value;
  });
  public softSkills = softSkills;

  constructor() {}

  ngOnInit(): void {}
}
