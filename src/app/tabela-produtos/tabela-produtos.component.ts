import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent {
  listaProdutos: Produto[] = [];
  nomePesquisado: string = "";

  constructor(private produtoApiService: ProdutoApiService) {
      this.listar();
  }

  listar() {
    this.produtoApiService.getListaProdutos().subscribe(
      (produtos) => this.listaProdutos = produtos
    )
  }

  deletar(id?: number) {
    this.produtoApiService.deletar(id!).subscribe(produto => {
      console.log('Produto deletado', produto);
      this.listar();
    });
  }

}
