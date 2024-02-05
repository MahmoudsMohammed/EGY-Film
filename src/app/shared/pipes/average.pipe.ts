import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average',
  standalone: true,
})
export class averagePipe implements PipeTransform {
  transform(value: number, ...args: any[]) {
    return value.toFixed(1);
  }
}
