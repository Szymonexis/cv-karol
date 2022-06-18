import { Component, OnInit } from '@angular/core';
import { hobbies } from 'src/app/shared/cv-data.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent implements OnInit {
  public hobbies = hobbies;

  constructor() {}

  ngOnInit(): void {}
}
