import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoServices } from '../produtos.services';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutosComponent implements OnInit {


  constructor(private produtoService : ProdutoServices) {
    this.produtos = [];
  }
  public produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.obterProdutos().subscribe(// quando componente tiver carrgado, popular lista de produtos
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }
}
