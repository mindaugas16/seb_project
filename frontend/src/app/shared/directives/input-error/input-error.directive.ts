import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Host,
  Inject,
  InjectionToken,
  OnDestroy,
  OnInit,
  Optional,
  ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { EMPTY, merge, Observable, Subscription } from 'rxjs';
import { FormSubmitDirective } from '../form-submit/form-submit.directive';
import { InputErrorComponent } from '../../components/input-error/input-error.component';


export const defaultErrors = {
  required: () => `This field is required`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});


@Directive({
  selector: '[formControlName]',
})
export class InputErrorDirective implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  componentRef: ComponentRef<InputErrorComponent>;
  submit$: Observable<Event>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Inject(FORM_ERRORS) private errors: Error,
    @Optional() @Host() private form: FormSubmitDirective,
    private ngControl: NgControl,
  ) {
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit() {
    this.subscription.add(
      merge(
        this.submit$,
        this.ngControl.control.valueChanges,
      ).subscribe(() => {
        const controlErrors = this.ngControl.control.errors;
        if (controlErrors) {
          const [key] = Object.keys(controlErrors);
          const error = this.errors[key];
          this.setError(error(controlErrors[key]));
        } else if (this.componentRef) {
          this.setError(null);
        }
      }));
  }

  setError(text: string) {
    if (!this.componentRef) {
      const factory = this.resolver.resolveComponentFactory(InputErrorComponent);
      this.componentRef = this.viewContainerRef.createComponent(factory);
    }

    this.componentRef.instance.text = text;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
