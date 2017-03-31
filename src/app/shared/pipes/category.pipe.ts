import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(products: Product[]): any {
    const array = [];
    products.forEach(item => {
      const index = array.indexOf(item.type);
      if (index === -1){
        array.push(item.type);
      }
    })
   return array;
  }

}
