import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menu = [
    {
      "label":"admagenda",
      "icone":"calendar",
      "acao":"admagenda",
      "menu":"1",
      "exibirMenu": true
    },
    {
      "label":"admagenda1",
      "icone":"calendar",
      "acao":"admagenda1",
      "menu":"2",
      "exibirMenu": true
    }


  ];
  constructor() { }
}
