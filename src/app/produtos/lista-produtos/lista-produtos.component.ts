import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) {}

  public produtos: Produto[] = [];
  

  ngOnInit() {
    this.carregarProdutos();
   }

   carregarProdutos(){
    this.produtoService.obterProdutos()
    .subscribe(
      produtos => {
        this.produtos = produtos
        console.log(produtos);
      },
      //caso erro
      error => console.log(error)
    );
   }
}
