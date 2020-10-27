import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { AlunoCrudComponent } from './views/aluno-crud/aluno-crud.component';
import { AlunoDeleteComponent } from './components/aluno/aluno-delete/aluno-delete.component';


const routes: Routes = [{

  path: "",
  component: HomeComponent
},
{
  path: "alunos",
  component: AlunoCrudComponent
},
{
  path: "alunos/create",
  component: AlunoCreateComponent
},
{
  path: "alunos/update/:id",
  component: AlunoUpdateComponent
},
{
  path: "alunos/delete/:id",
  component: AlunoDeleteComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
