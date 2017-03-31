import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(products: Product[]): string[] {
    //  return  [...new Set(products.map(item => item.type)) as any]; why???
    return products.map(item => item.type).filter((value, index, self) => self.indexOf(value) === index);
  }

}
