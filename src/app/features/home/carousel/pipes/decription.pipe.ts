import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'descrip',
})
export class decriptionPipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    return `${value.split(' ').slice(0, 20).join(' ')}....`;
  }
}
