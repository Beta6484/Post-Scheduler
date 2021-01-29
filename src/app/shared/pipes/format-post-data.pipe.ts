import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPostData'
})

export class FormatPostDataPipe implements PipeTransform {
  transform(value: any): any {
    let res = new Date(value);

    return res.toLocaleDateString('pt-br', { day: '2-digit', month: 'long' });
  }
}
