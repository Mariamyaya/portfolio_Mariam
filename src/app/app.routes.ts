import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
//import { SkillsComponent } from './pages/skills/skills.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'projects/:slug', component: ProjectDetailComponent},
  { path: '**', redirectTo: '' }

];
