import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { FormDetailsComponent } from './form-details/form-details.component';

import { ProductService } from './shared/services/product.service';
import { LoginService } from './shared/services/login.service';
import { AuthGuardService } from './shared/services/auth-guard.service';

import { environment } from '../environments/environment';
import { DOMAIN } from './config';

import { SortPipe } from './shared/pipes/sort.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { CategoryPipe } from './shared/pipes/category.pipe';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './common/reducers';

import { ProductEffects } from './common/effects/product';
import { AuthEffects } from './common/effects/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortPipe,
    FormDetailsComponent,
    SearchPipe,
    ProductsComponent,
    CartComponent,
    CategoryPipe,
    ProductDetailComponent,
    FooterComponent,
    LoginComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, {
      initialState: {
        auth: {
          loggedIn: true
        }
      }
    }),
    EffectsModule.forRoot([ProductEffects, AuthEffects]),
    // StoreDevtoolsModule.instrumentStore({
    //   maxAge: 25
    // }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    ProductService,
    {
      provide: DOMAIN,
      useValue: environment.domain,
    },
    AuthGuardService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
