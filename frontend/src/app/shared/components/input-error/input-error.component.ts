import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
})
export class InputErrorComponent implements OnInit {
  private _text: string;
  hidden: boolean = true;

  @Input()
  set text(value) {
    if (value !== this._text) {
      this._text = value;
      this.hidden = !value;
      this.cdr.detectChanges();
    }
  };

  get text(): string {
    return this._text;
  };

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

}
