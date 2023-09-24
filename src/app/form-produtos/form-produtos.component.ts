import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent {
  produto = new Produto();
  id!: number;
  botaoAcao = "Cadastrar";

  constructor(
    private produtoAPIService: ProdutoApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.params['id'];    
    if(this.id) {
      this.botaoAcao = 'Editar';
      this.produtoAPIService.buscarPorId(this.id).subscribe(produto => {
        this.produto = produto;
      });
    }
  }

  salvar() {
    if(this.id) {
      this.produtoAPIService.editar(this.id, this.produto).subscribe(prod => {              
        this.produto = prod;
        alert(this.produto.nome+" editado com sucesso!");
      });      
    }
    else {
      this.produtoAPIService.inserir(this.produto).subscribe(
        (produtoI) => {
          this.produto = new Produto();
          alert(produtoI.id+" cadastrado com sucesso!");
        }
      );
    }
  }

  voltar() {
    this.router.navigate(['/tabela']);
  }
  
}
