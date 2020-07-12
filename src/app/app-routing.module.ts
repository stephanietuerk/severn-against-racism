import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { JoinComponent } from './components/join/join.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'join', component: JoinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
