import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public transform(products: Product[], args?: string): Product[] {
    return products;
  }

}
