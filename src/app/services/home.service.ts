import {Injectable} from '@angular/core';
import {Person} from '../../app/models/person';

import {Social} from '../../app/models/social';

@Injectable()
export class HomeService{
  public birthday: Date = new Date(1977, 10, 21);
  public socials: Social[] = [
    new Social('Facebook', 'https://www.facebook.com/marciosoares.net', 'facebook', '#3B5998'),
    new Social('Twitter', 'https://twitter.com/bymarcio', 'twitter', '#1DA1F2'),
    new Social('Linkedin', 'https://www.linkedin.com/in/bymarcio', 'linkedin', '#0177B5')

  ];

  public person: Person = new Person(
                                      'Marcio Soares', 
                                      'Brasileiro', 
                                      'Rua Amalia Cerelo Godespoti, 30 - Vila Inglesa', 
                                      '(11) 97999-8100', 
                                      'marcio@mail.com', 
                                      this.birthday, 
                                      'img/IMG_00173.png',
                                      this.socials
                                    );

    showPerson(){
      return this.person;
    }

    showSocials(){
      return this.socials;
    }

  }