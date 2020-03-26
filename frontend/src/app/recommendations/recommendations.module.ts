import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { RecommendationsComponent } from './recommendations.component';
import { ItemComponent } from './list/item/item.component';

@NgModule({
  declarations: [FormComponent, ListComponent, RecommendationsComponent, ItemComponent],
  imports: [CommonModule],
  exports: [
    RecommendationsComponent,
  ],
})
export class RecommendationsModule {}
