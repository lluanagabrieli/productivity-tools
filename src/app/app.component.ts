import { Component } from '@angular/core';
import { ListaTarefasComponent } from "./pages/lista-tarefas/lista-tarefas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atividades';
}
