import {Injectable} from '@angular/core';
import {Course} from '../../app/models/course';
import {Academic} from '../../app/models/academic';

@Injectable()
export class ContactService{
  public academic: Academic = new Academic('Senac Nações Unidas', 'Av. Engenheiro Eusébio Stevaux, 823 - Santo Amaro São Paulo - SP  CEP: 04696-000', '(11) 5682-7300  Fax:(11) 5682-7441', 'nacoesunidas@sp.senac.br', '', 'img/senac.jpg');
  public courses: Course[] = [
    new Course('Análise e Desenvolvimento de Sistemas', new Date(2015, 1, 15), new Date(2017, 7, 15), 'A graduação em Tecnologia em Análise e Desenvolvimento de Sistemas do Centro Universitário Senac tem como objetivo formar profissionais que reúnam as competências necessárias para atuar em todos os processos de análise e desenvolvimento de sistemas, desde a sua concepção, planejamento, desenvolvimento, implementação e acompanhamento desses sistemas em ambiente de produção.', this.academic)
  ];

  showCourses(){
    return this.courses;
  }

  showAcademic(){
    return this.academic;
  }
}