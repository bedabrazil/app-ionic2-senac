import {Injectable} from '@angular/core';
import {Qualification} from '../../app/models/qualification';


@Injectable()
export class AboutService{
  public qualifications: Qualification[] = [
      new Qualification('Angular2', 'angular', 'Conhecimento intermediário', '#E63135'),
      new Qualification('Javascript', 'javascript', 'Conhecimento avançado', '#FFD439'),
      new Qualification('CSS3', 'css3', 'Conhecimento avançado', '#0CA9EA'),
      new Qualification('HTML5', 'html5', 'Conhecimento avançado', '#F46529'),
      new Qualification('Sass', 'sass', 'Conhecimento intermediário', '#CE6296'),
      new Qualification('SQL', 'star', 'Conhecimento avançado', '#FFD439'),
      new Qualification('Ruby on Rails', 'star', 'Conhecimento avançado', '#0CA9EA'),
      new Qualification('.Net', 'star', 'Conhecimento intermediário', '#E63135'),
      new Qualification('Java', 'star', 'Conhecimento intermediário', '#F46529'),
      new Qualification('Ionic2', 'star', 'Conhecimento intermediário' , '#CE6296'),
      
    ];
    showQualifications(){
      return this.qualifications;
    }    
}