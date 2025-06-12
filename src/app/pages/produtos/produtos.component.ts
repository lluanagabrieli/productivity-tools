import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  listaProdutos: { nome: string, categoria: string, preco: number }[] = [];

  produto = {
    nome: '',
    categoria: '',
    preco: 0
  };

  salvarProduto() {
    this.listaProdutos.push({...this.produto});

    this.produto = {
      nome: '',
      categoria: '',
      preco: 0
    };
  }
}
