import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {
  public contatadorClique: number = 0;

  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";

  public nome: string = "";

  adicionarClick(){
    this.contatadorClique++;
  }
  resetClick(){
    this.contatadorClique = 0;
  }
  // KeyUp(event: any){//Ctrl+k Ctrl+c
  //   this.nome = event.target.value;
  // }
}
