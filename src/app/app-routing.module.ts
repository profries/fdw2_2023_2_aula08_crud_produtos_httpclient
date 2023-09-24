import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const rotas: Routes = [
  { path: 'tabela', component: TabelaProdutosComponent },
  { path: 'novo', component: FormProdutosComponent},
  { path: 'edit/:id', component: FormProdutosComponent},
  { path: '', redirectTo: '/tabela', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
