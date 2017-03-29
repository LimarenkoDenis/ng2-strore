import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
    console.log(order.value);
  }
}
