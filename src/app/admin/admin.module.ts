import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'product-create', pathMatch: 'full'},
      { path: 'product-create', component: ProductCreateComponent}
    ])
  ],
  declarations: [
    ProductCreateComponent
  ]
})
export class AdminModule { }
