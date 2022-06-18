import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { WorkComponent } from './components/work/work.component';
import { EducationComponent } from './components/education/education.component';
import { MaterialModule } from './shared/material/material.module';
import { ClauseComponent } from './components/clause/clause.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    HobbiesComponent,
    WorkComponent,
    EducationComponent,
    ClauseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
