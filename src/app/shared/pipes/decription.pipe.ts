import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'descrip',
})
export class decriptionPipe implements PipeTransform {
  transform(value: string, args: number) {
    let n = value.split(' ');
    return n.length > args ? `${n.slice(0, args).join(' ')}....` : value;
  }
}
