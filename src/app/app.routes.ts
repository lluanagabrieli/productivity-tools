import { Routes } from '@angular/router';
import { ListaTarefasComponent } from './pages/lista-tarefas/lista-tarefas.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'todolist',
    component: ListaTarefasComponent
  },
  {
    path: 'lista-compras',
    component: ProdutosComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
