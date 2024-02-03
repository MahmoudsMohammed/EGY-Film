import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'descrip',
})
export class decriptionPipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    return `${value.substr(0, 130)}....`;
  }
}
