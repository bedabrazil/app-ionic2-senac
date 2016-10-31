import {Injectable} from '@angular/core';
import {Company} from '../../app/models/company';

@Injectable()
export class ResumeService{
  public companies: Company[] = [
    new Company('Eicon Brasil', 'Soluções para área pública e privada', new Date(2015, 11, 7), new Date(), '', 'Analista/Desenvolvedor Ruby on Rails', 
    [
      'Desenvolvimento em sistema de gestão de obras públicas.',
      'Criação de novas funcionalidades para o sistema.',
      'Analise de Requisitos', 
      'Prototipação de Telas', 
      'Analise de Sistema', 
      'modelagem de banco de dados MySQL', 
      'Desenvolvimento de funcionalidades construtivas e corretivas.'
    ]),
    new Company('Feira de Cosméticos', 'Tecnologia da Beleza', new Date(2012, 1, 10), new Date(2015, 11, 22), '',  'Analista/Desenvolvedor Ruby on Rails', ['Foco no desenvolvimento em Ruby On Rails', 'HTML5/CSS/Javascript/JQuery', 'Participação ativa na criação',  'implementação e modelagem de dados', 'Análise de Requisitos']),
    new Company('F1-Help', 'Consultoria em Tecnologia', new Date(2011, 3, 6), new Date(2012, 6, 10), '',  'Analista/Desenvolvedor .Net', ['Participação no desenvolvimento de CRM próprio da empresa, modelagem de banco de dados SQL Server.', 'Sistema de integração de frotas com Google Maps e GPS, Prototipação de Telas, implementação Javascript.', 'Manutenção de sistema de gerenciamento de chips em PHP.', 'Reformulação de sistema de gerenciamento de clientes em .Net/C#, Prototipação de Telas.', 'Manutenção de sistema de vallet, baseado em máquinas de cartão (POS) em C.']),
    new Company('EWTI', 'Engenharia de Web', new Date(2005, 6, 22), new Date(2010, 5, 15), '',  'Analista/Desenvolvedor Ruby on Rails', ['Prototipação de Telas, modelagem de banco de dados MySQL, Desenvolvimento de funcionalidades construtivas e corretivas.', 'Desenvolvimento com Ruby on Rails, utilizando­se JQuery, CSS, JavaScript, para layouts responsivos, GIT.', 'Participação ativa em grandes projetos e desenvolvimento de funcionalidades construtivas e corretivas.']),
  ];

  showCompanies(){
    return this.companies;
  }
}