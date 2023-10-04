import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DetailsPage } from '../details/details.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'details',
    component: DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
