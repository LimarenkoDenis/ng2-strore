import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { SummaryComponent } from './summary/summary.component';

import { ProductService } from './shared/services/product.service';
import { CartService } from './shared/services/cart.service';
import { UtilsService } from './shared/services/utils.service';

import { environment } from '../environments/environment';
import { DOMAIN } from './config';

import { SortPipe } from './shared/pipes/sort.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { CategoryPipe } from './shared/pipes/category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortPipe,
    FormDetailsComponent,
    SummaryComponent,
    SearchPipe,
    ProductsComponent,
    CartComponent,
    CategoryPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    ProductService,
    CartService,
    UtilsService,
    {
      provide: DOMAIN,
      useValue: environment.domain,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
