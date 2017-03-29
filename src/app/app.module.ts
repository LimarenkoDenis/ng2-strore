import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { HeaderComponent } from './header/header.component';

import { ProductService } from './product.service';
import { SortPipe } from './sort.pipe';
import { FormDetailsComponent } from './form-details/form-details.component';
import { SummaryComponent } from './summary/summary.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortPipe,
    FormDetailsComponent,
    SummaryComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
