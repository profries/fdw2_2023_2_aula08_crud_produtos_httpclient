import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {
  //30.003231 ou 30 -> 30.00
  //30.00 -> 30,00
  //30,00 -> R$ 30,00

  transform(valor: number | undefined): string {
    if (!valor) {
      return "";
    }
    const valorDecimal = valor.toFixed(2);
    const valorDecimalBr = valorDecimal.replace('.', ',');
    const valorMoeda = 'R$ '+valorDecimalBr;
    return valorMoeda;
  }

}
