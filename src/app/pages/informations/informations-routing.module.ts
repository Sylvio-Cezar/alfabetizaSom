import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationsPage } from './informations.page';

const routes: Routes = [
  {
    path: '',
    component: InformationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationsPageRoutingModule {}
