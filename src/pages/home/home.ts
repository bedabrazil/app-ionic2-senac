import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomeService} from '../../app/services/home.service';
import {Person} from '../../app/models/person';
import {Social} from '../../app/models/social';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
//dados pessoais
export class HomePage implements OnInit {
  public title: string = 'Dados Pessoais';
  public person: Person;
  public socials: Social[];
  constructor(public navCtrl: NavController, public homeService: HomeService) {}
  ngOnInit() {
    this.person = this.homeService.showPerson();
    this.socials = this.homeService.showSocials();
  }
  open(url:string){
    window.open(url, '_system', 'location=no')
  }
}
