import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    const categories = [];
    products.forEach((item: Product) => {
      const index = categories.indexOf(item.type);
      if (index === -1){
        categories.push(item.type);
      }
    })
   return categories;
  }

}
