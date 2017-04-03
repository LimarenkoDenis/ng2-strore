import { ProductsComponent } from './products/products.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { CartComponent } from './cart/cart.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'form', component: FormDetailsComponent},
  { path: '**', redirectTo: 'products' }
];
