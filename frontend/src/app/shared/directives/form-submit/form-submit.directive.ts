import { Directive, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Directive({
  selector: 'form',
})
export class FormSubmitDirective {
  submit$ = fromEvent(this.element, 'submit')
    .pipe(tap(() => {
      if (this.element.classList.contains('ng-submitted') === false) {
        this.element.classList.add('ng-submitted');
      }
    }), shareReplay(1));

  constructor(private host: ElementRef<HTMLFormElement>) {
  }

  get element() {
    return this.host.nativeElement;
  }
}
