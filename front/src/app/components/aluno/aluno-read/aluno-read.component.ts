import { AlunoService } from './../../aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit {

  alunos: Aluno[]
  displayedColumns = ['id', 'name', 'mensalidade', 'action']

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
      this.alunoService.read().subscribe(alunos => {
        this.alunos = alunos
       
      })
  }

}
