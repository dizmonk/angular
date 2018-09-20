import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {DetailsComponent} from './details/details.component';
import {HistoryComponent} from './history/history.component';
import {DefaultTemplateComponent} from './default-template/default-template.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultTemplateComponent
  },

  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
