import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'indicadorSimNao' })
export class IndicadorSimNaoBooleanPipe implements PipeTransform {
  transform(value: boolean): string {
    return value == true ? 'Sim' : 'Não'
  };
}
