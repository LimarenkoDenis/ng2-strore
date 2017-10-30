import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent {

  public details: FormGroup;

  public constructor(
    private _fb: FormBuilder
  ) {
    this.details = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required]]
    });
  }

  public createOrder(order: FormGroup): void {
    // get cart and send to server
  }
}

