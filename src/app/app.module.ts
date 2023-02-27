import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './services/portfolio.service';
import { InterceptorService } from './services/interceptor.service';
import { EditComponent } from './components/edit/edit.component';
import { PersonComponent } from './components/person/person.component';
import { AddComponent } from './components/experience/add/add.component';
import { AddEducationComponent } from './components/experience/add-education/add-education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProgressComponent,
    ProjectsComponent,
    LoginFormComponent,
    PortfolioComponent,
    EditComponent,
    PersonComponent,
    AddComponent,
    AddEducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PortfolioService, {
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
