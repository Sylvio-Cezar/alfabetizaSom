import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DetailsPage } from '../details/details.page';
import { QuizPage } from '../quiz/quiz.page';
import { SyllablesPage } from '../syllables/syllables.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'details',
    component: DetailsPage
  },
  {
    path: 'quiz',
    component: QuizPage
  },
  {
    path: 'syllables',
    component: SyllablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
