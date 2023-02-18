import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[faixaEtariaValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: FaixaEtariaDirective,
    multi:true
  }]
})
export class FaixaEtariaDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value;
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const anoNascMais18 = anoNascimento + 18;
    const anoAtual = new Date().getFullYear();

    const maior = anoNascMais18 <= anoAtual;

    return maior ? null : {'faixaEtariaValidator': true};
  }
}
