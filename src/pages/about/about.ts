import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutService} from '../../app/services/about.service';
import {Qualification} from '../../app/models/qualification';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [AboutService]
})
// objetivo profissional
export class AboutPage implements OnInit{
  public title: string = 'Qualificações';
  public qualifications: Qualification[];
  constructor(public navCtrl: NavController, public aboutService: AboutService) {}
  
  ngOnInit() {
    this.qualifications = this.aboutService.showQualifications();
  }  
}
