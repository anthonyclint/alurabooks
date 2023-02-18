import { ICep } from './../models/ICep.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// * viacep.com.br/ws/00000000/json - Exemplo de url
const CEP = 'https://viacep.com.br/ws';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  public consultaCep(cep: string){
    return this.http.get<ICep>(`${CEP}/${cep}/json`);
  }
}
