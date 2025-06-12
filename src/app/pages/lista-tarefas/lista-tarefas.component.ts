import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {
  tarefa: string = '';
  listaTarefas: { nome: string, concluida: boolean }[] = [
    {
      nome: 'Passar na farmácia',
      concluida: false
    }
  ];

  adicionarTarefa() {
    this.tarefa.trim();

    if(this.tarefa !== '') {
      this.listaTarefas.push({
        nome: this.tarefa,
        concluida: false
      });
    }
    this.tarefa = '';
  }

  concluirTarefa(index: number) {
    this.listaTarefas[index].concluida = !this.listaTarefas[index].concluida;
  }

  removerTarefa(index: number) {
    this.listaTarefas.splice(index, 1);
  }
}
