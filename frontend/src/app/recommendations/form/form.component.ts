import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recommendations-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    age: new FormControl(null, [Validators.min(0), Validators.max(200), Validators.required]),
    isStudent: new FormControl(false, [Validators.required]),
    income: new FormControl(null, [Validators.required])
  });
  questions;
  constructor() { }

  ngOnInit(): void {
  }

}
