import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPostDateTime'
})

export class FormatPostDateTimePipe implements PipeTransform {
  transform(value: string): string {
    let resDate = new Date(value).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: '2-digit',
      year:  'numeric'
    });
    let resTime = new Date(value).toLocaleTimeString('pt-br', {
      hour: '2-digit',
      minute:'2-digit',
      hour12: false
    })

    return `${resDate} às ${resTime}h`
  }
}
