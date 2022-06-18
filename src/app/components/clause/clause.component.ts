import { Component, OnInit } from '@angular/core';
import { clause } from 'src/app/shared/cv-data.service';


@Component({
  selector: 'app-clause',
  templateUrl: './clause.component.html',
  styleUrls: ['./clause.component.scss'],
})
export class ClauseComponent implements OnInit {
  public data = clause;
  
  constructor() {}

  ngOnInit(): void {}
}
