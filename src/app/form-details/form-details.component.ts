import { Component, EventEmitter, Input, Output  } from '@angular/core';
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

  public onSubmit(event): void {
    // event.stopPropagation();
    this.submit.emit(this.details);
  }
}

