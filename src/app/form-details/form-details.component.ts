import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent {
  @Input()
  public details: FormGroup;

  @Output()
  public submit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  onSubmit(event) {
    event.stopPropagation();
    this.submit.emit(this.details);
  }
}

