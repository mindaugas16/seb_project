import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorDirective } from './directives/input-error/input-error.directive';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { FormSubmitDirective } from './directives/form-submit/form-submit.directive';

@NgModule({
  declarations: [InputErrorDirective, InputErrorComponent, FormSubmitDirective],
  exports: [InputErrorDirective, InputErrorComponent, FormSubmitDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
