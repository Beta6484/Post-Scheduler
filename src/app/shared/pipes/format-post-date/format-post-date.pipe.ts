import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPostData'
})

export class FormatPostDatePipe implements PipeTransform {
  transform(value: any): any {
    let res = new Date(value).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: 'long'
    });

    return res;
  }
}
