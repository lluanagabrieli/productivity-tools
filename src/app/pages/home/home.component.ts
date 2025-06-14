import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 botoes: { nome: string, rota: string }[] = [
    {
      nome: 'Lista de Tarefas',
      rota: 'todolist'
    },
    {
      nome: 'Lista de Compras',
      rota: 'lista-compras'
    }
  ];
}
