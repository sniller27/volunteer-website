import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//my components
import { HomeComponent } from './home/home.component';
import { ProgrammeComponent } from './programme/programme.component';
import { AboutComponent } from './about/about.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'programme',
    component: ProgrammeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'volunteer',
    component: VolunteerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
