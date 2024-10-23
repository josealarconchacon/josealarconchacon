import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './home/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchProjectsComponent } from './projects/sch-projects/sch-projects.component';
import { HeaderComponent } from './home/header/header.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ResumeComponent } from './home/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SchProjectsComponent,
    ContactComponent,
    HeaderComponent,
    ResumeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
