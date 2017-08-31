import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from './shared/services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public details: FormGroup;

  public constructor(
    private _utilsService: UtilsService,
    public snackBar: MdSnackBar,
    private _fb: FormBuilder
  ) {
    this.details = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required]]
    });
  }

  public ngOnInit(): void {
    this._utilsService.onMessage().subscribe((msg: string) => {
      this._showMessageBar(msg);
    });
  }

  public createOrder(order: FormGroup): void {
    console.log(order.value);
  }

  private _showMessageBar(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 2000,
    });
  }

}
