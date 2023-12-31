import { MomentoComponent } from './components/pages/momento/momento.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { EditMomentoComponent } from './components/pages/edit-momento/edit-momento.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'momentos/new', component: NewMomentComponent },
  { path: 'momentos/:id', component: MomentoComponent },
  { path: 'momentos/edit/:id', component: EditMomentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
