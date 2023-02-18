import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ICep } from './../models/ICep.interface';
import { CepService } from './../service/cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private cep: CepService
  ) { }

  ngOnInit(): void {
  }

  public cadastrar(form: NgForm){
    if(form.valid){
      this.router.navigate(['./sucesso']);
    }
    else{
      alert('Formulário inválido');
    }
      console.log(form.controls);
  }

  public procuraCep(event: any, f: NgForm){
    const cep = event.target.value;

    if(cep !== ''){
      return this.cep.consultaCep(cep)
        .subscribe({
          next: (
            (resultado) => {
              console.log(resultado)
              this.populandoEndereco(resultado, f)
            }
          ),
          error: erro => console.log(erro)
        })
    }
    return;
  }

  public populandoEndereco(info: ICep, f: NgForm){
    f.form.patchValue({
      endereco: info.logradouro,
      complemento: info.complemento,
      bairro: info.bairro,
      cidade: info.localidade,
      estado: info.uf 
    });
  }
}
