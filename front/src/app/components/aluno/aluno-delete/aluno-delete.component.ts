import { AlunoService } from './../../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.css']
})
export class AlunoDeleteComponent implements OnInit {
  aluno: Aluno;

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.alunoService.readById(id).subscribe((aluno) => {
      this.aluno = aluno;
    });
  }

  deleteAluno(): void {
    this.alunoService.delete(this.aluno.id).subscribe(() => {
      this.alunoService.showMessage("Aluno excluido com sucesso!");
      this.router.navigate(["/alunos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/alunos"]);
  }
}
