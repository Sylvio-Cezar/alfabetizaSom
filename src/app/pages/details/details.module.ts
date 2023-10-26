import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { QuizPage } from '../quiz/quiz.page';
import { SyllablesPage } from '../syllables/syllables.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DetailsPageRoutingModule
  ],
  declarations: [DetailsPage, QuizPage, SyllablesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailsPageModule {}
