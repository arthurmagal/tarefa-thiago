import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  standalone: false,
  templateUrl: './dados.html',
  styleUrl: './dados.css'
})
export class Dados {

  mostrarMensagem = true;

  ocultarTexto(){
    this.mostrarMensagem =! this.mostrarMensagem;
  }
}
